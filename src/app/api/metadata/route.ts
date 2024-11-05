import { NextRequest, NextResponse } from "next/server";
import { load } from "cheerio";

interface Metadata {
  title?: string;
  description?: string;
  image?: string;
  url: string;
  publishedTime?: string;
  keywords?: string[];
  author?: string;
}

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url || typeof url !== "string") {
      return NextResponse.json({ message: "Invalid URL" }, { status: 400 });
    }

    const response = await fetch(url);
    const html = await response.text();
    const $ = load(html);

    // Enhanced image extraction
    const findImage = (): string | undefined => {
      // Try all possible meta image tags
      const possibleMetaTags = [
        'meta[property="og:image"]',
        'meta[property="og:image:secure_url"]',
        'meta[name="twitter:image"]',
        'meta[name="twitter:image:src"]',
        'meta[itemprop="image"]',
        'link[rel="image_src"]',
      ];

      for (const tag of possibleMetaTags) {
        const content = $(tag).attr("content") || $(tag).attr("href");
        if (content) return content;
      }

      // Try to find the first relevant image in the content
      const firstImage = $('img[src*="wp-content"]').first().attr('src');
      if (firstImage) return firstImage;

      // Try to find logo
      const logo = $('#logo').attr('src');
      if (logo) return logo;

      return undefined;
    };

    // Enhanced metadata extraction
    const metadata: Metadata = {
      title:
        $('meta[property="og:title"]').attr("content") ||
        $('meta[name="twitter:title"]').attr("content") ||
        $("title").text() ||
        undefined,
      description:
        $('meta[property="og:description"]').attr("content") ||
        $('meta[name="twitter:description"]').attr("content") ||
        $('meta[name="description"]').attr("content") ||
        undefined,
      image: findImage(),
      url: url,
      publishedTime:
        $('meta[property="article:published_time"]').attr("content") ||
        $('meta[property="article:modified_time"]').attr("content") ||
        undefined,
      keywords: $('meta[name="keywords"]')
        .attr("content")
        ?.split(",")
        .map((k) => k.trim())
        .filter(Boolean) || undefined,
      author:
        $('meta[name="author"]').attr("content") ||
        $('meta[property="article:author"]').attr("content") ||
        $('meta[property="og:site_name"]').attr("content") ||
        undefined,
    };

    // Clean up metadata by removing undefined values
    Object.keys(metadata).forEach((key) => {
      if (metadata[key as keyof Metadata] === undefined) {
        delete metadata[key as keyof Metadata];
      }
    });

    // Convert relative URLs to absolute URLs
    if (metadata.image && !metadata.image.startsWith('http')) {
      const baseUrl = new URL(url).origin;
      metadata.image = new URL(metadata.image, baseUrl).toString();
    }

    return NextResponse.json(metadata, { status: 200 });
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return NextResponse.json(
      { message: "Error fetching metadata" },
      { status: 500 }
    );
  }
}