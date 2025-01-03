'use client'
import React from "react";
import Header from '@/components/Header';



import { Tabs } from 'flowbite';
import type { TabsOptions, TabsInterface, TabItem } from 'flowbite';
import type { InstanceOptions } from 'flowbite';











//*************************************************************************** */

const EstimadorCostos = () => {



    const tabControl = () => {


        const tabsElement: HTMLElement = document.getElementById('tabs-example');

        // create an array of objects with the id, trigger element (eg. button), and the content element
        const tabElements: TabItem[] = [
            {
                id: 'profile',
                triggerEl: document.querySelector('#profile-tab-example'),
                targetEl: document.querySelector('#profile-example'),
            },
            {
                id: 'dashboard',
                triggerEl: document.querySelector('#dashboard-tab-example'),
                targetEl: document.querySelector('#dashboard-example'),
            },
            // {
            //     id: 'settings',
            //     triggerEl: document.querySelector('#settings-tab-example'),
            //     targetEl: document.querySelector('#settings-example'),
            // },
            {
                id: 'contacts',
                triggerEl: document.querySelector('#contacts-tab-example'),
                targetEl: document.querySelector('#contacts-example'),
            },
        ];

        // options with default values
        const options: TabsOptions = {
            defaultTabId: 'settings',
            activeClasses:
                'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
            inactiveClasses:
                'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
            onShow: () => {
                console.log('tab is shown');
            },
        };

        // instance options with default values
        const instanceOptions: InstanceOptions = {
            id: 'tabs-example',
            override: true
        };

        /*
        * tabsElement: parent element of the tabs component (required)
        * tabElements: array of tab elements (required)
        * options (optional)
        * instanceOptions (optional)
        */
        const tabs: TabsInterface = new Tabs(tabsElement, tabElements, options, instanceOptions);

        // open tab item based on id
        tabs.show('profile');

        calculateCost();
    }


    window.addEventListener('load', tabControl);



    //*********************************************************************************************** */




    const addUseCase = () => {
        let txtUseCase = document.querySelector('#inp-use-case')
        let sltUseCaseComplexity = document.querySelector('#slt-use-case-complexity');


        let useCase = document.querySelector('#inp-use-case').value;
        let useCaseComplexity = document.querySelector('#slt-use-case-complexity').value;
        let tblUseCase = document.querySelector('#tbl-use-case tbody');
        let tBodyTemp = "";





        let statusText = "";
        let statusColor = "";



        if (useCaseComplexity == 5) {
            statusText = "Simple";
            statusColor = "text-red-900 bg-red-500/20";
        } else if (useCaseComplexity == 10) {
            statusText = "Promedio";
            statusColor = "text-amber-900 bg-amber-500/20";
        } else if (useCaseComplexity == 15) {
            statusText = "Complejo";
            statusColor = "text-green-900 bg-green-500/20";
        }




        let rowTbluseCase = `
        <tr>
            <td class='p-4 border-b border-blue-gray-50'>
                <div class="flex items-center gap-3">
                    <p class="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                       C3333
                    </p>
                </div>
            </td>

            <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    ${useCase}
                </p>
            </td>

            <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    ${useCaseComplexity}
                </p>
                <input type="hidden" id="val${useCaseComplexity}" value="${useCaseComplexity}"/>

            </td>

            <td class="p-4 border-b border-blue-gray-50">
                <div class="w-max">
                    <div class="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-md select-none whitespace-nowrap ${statusColor}">
                        <span class="">${statusText}</span>
                    </div>
                </div>
            </td>

            <td class="p-4 border-b border-blue-gray-50">
                <button
                class="botones-1 relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button">
                    <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                            <path fill-rule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                        </svg>
                    </span>
                </button>
            </td>
        </tr>`;

        tBodyTemp = tblUseCase.cloneNode(true);
        tblUseCase.innerHTML = rowTbluseCase + tBodyTemp.innerHTML;


        // Generación de ID
        let trUseCase = tblUseCase.querySelectorAll('TR');
        let tdId = "";
        let cont = trUseCase.length;

        for (let i = 0; i < trUseCase.length; i++) {
            tdId = trUseCase[i].querySelector('TD DIV P');
            tdId.innerHTML = cont;
            cont--;
        }


        // calculating the total weight

        let simpleWeighting = document.querySelector('#txt-simple-weighting-use-case');
        let averageWeighting = document.querySelector('#txt-average-weighting-use-case');
        let complexWeighting = document.querySelector('#txt-complex-weighting-use-case');

        let totalVal5 = document.querySelectorAll('#val5').length;
        let totalVal10 = document.querySelectorAll('#val10').length;
        let totalVal15 = document.querySelectorAll('#val15').length;

        simpleWeighting.innerHTML = totalVal5;
        averageWeighting.innerHTML = totalVal10;
        complexWeighting.innerHTML = totalVal15;

        let txtUUCW = document.querySelector('#txt-uucw');
        let UUCW = totalVal5 * 5 + totalVal10 * 10 + totalVal15 * 15;
        txtUUCW.innerHTML = UUCW;

        //limpiando cajas
        txtUseCase.value = "";
        sltUseCaseComplexity[0].selected = true;


        calculateCost();


        //eliminando fila  y actualizando datos 

        let botones1 = document.getElementsByClassName('botones-1');

        for (let i = 0; i < botones1.length; i++) {
            botones1[i].addEventListener('click', function () {
                // console.log(this.parentNode.parentNode);
                this.parentNode.parentNode.remove();

                //Actualización de los ID's
                trUseCase = tblUseCase.querySelectorAll('TR');
                tdId = "";
                cont = trUseCase.length;

                for (let i = 0; i < trUseCase.length; i++) {
                    tdId = trUseCase[i].querySelector('TD DIV P');
                    tdId.innerHTML = cont;
                    cont--;
                }

                //Actualizando resumen
                totalVal5 = document.querySelectorAll('#val5').length;
                totalVal10 = document.querySelectorAll('#val10').length;
                totalVal15 = document.querySelectorAll('#val15').length;

                simpleWeighting.innerHTML = totalVal5;
                averageWeighting.innerHTML = totalVal10;
                complexWeighting.innerHTML = totalVal15;

                txtUUCW = document.querySelector('#txt-uucw');
                UUCW = totalVal5 * 5 + totalVal10 * 10 + totalVal15 * 15;
                txtUUCW.innerHTML = UUCW;
            });
        }
    }

    const addActor = () => {

        let txtActor = document.querySelector('#inp-actor');
        let sltActorComplexity = document.querySelector('#slt-actor-complexity');
        let actor = document.querySelector('#inp-actor').value;
        let actorComplexity = document.querySelector('#slt-actor-complexity').value;
        let tblActor = document.querySelector('#tbl-actor tbody');
        let tBodyTemp = "";
        console.log(tblActor);


        let statusText = "";
        let statusColor = "";




        if (actorComplexity == 1) {
            statusText = "Simple";
            statusColor = "text-red-900 bg-red-500/20";
        } else if (actorComplexity == 2) {
            statusText = "Promedio";
            statusColor = "text-amber-900 bg-amber-500/20";
        } else if (actorComplexity == 3) {
            statusText = "Complejo";
            statusColor = "text-green-900 bg-green-500/20";
        }




        let rowTbluseCase = `
        <tr>
            <td class='p-4 border-b border-blue-gray-50'>
                <div class="flex items-center gap-3">
                    <p class="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                        C0003
                    </p>
                </div>
            </td>

            <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    ${actor}
                </p>
            </td>

            <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    ${actorComplexity}
                </p>
                <input type="hidden" id="val${actorComplexity}" value="${actorComplexity}"/>

            </td>

            <td class="p-4 border-b border-blue-gray-50">
                <div class="w-max">
                    <div class="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-md select-none whitespace-nowrap ${statusColor}">
                        <span class="">${statusText}</span>
                    </div>
                </div>
            </td>

            <td class="p-4 border-b border-blue-gray-50">
                <button
                class="botones-2 relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button">
                    <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                            <path fill-rule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                        </svg>
                    </span>
                </button>
            </td>
        </tr>`;

        tBodyTemp = tblActor.cloneNode(true);
        tblActor.innerHTML = rowTbluseCase + tBodyTemp.innerHTML;


        // Generación de ID
        let trActor = tblActor.querySelectorAll('TR');
        let tdId = "";
        let cont = trActor.length;

        for (let i = 0; i < trActor.length; i++) {
            tdId = trActor[i].querySelector('TD DIV P');
            tdId.innerHTML = cont;
            cont--;
        }


        // calculating the total weight

        let simpleWeightingActor = document.querySelector('#txt-simple-weighting-actor');
        let averageWeightingActor = document.querySelector('#txt-average-weighting-actor');
        let complexWeightingActor = document.querySelector('#txt-complex-weighting-actor');

        let totalVal1 = document.querySelectorAll('#val1').length;
        let totalVal2 = document.querySelectorAll('#val2').length;
        let totalVal3 = document.querySelectorAll('#val3').length;

        simpleWeightingActor.innerHTML = totalVal1;
        averageWeightingActor.innerHTML = totalVal2;
        complexWeightingActor.innerHTML = totalVal3;

        let txtUUAW = document.querySelector('#txt-uuaw');
        let UUAW = totalVal1 * 1 + totalVal2 * 2 + totalVal3 * 3;
        txtUUAW.innerHTML = UUAW;


        txtActor.value = "";
        sltActorComplexity[0].selected = true;
        calculateCost();




        //eliminando fila  y actualizando datos 

        let botones2 = document.getElementsByClassName('botones-2');

        for (let i = 0; i < botones2.length; i++) {
            botones2[i].addEventListener('click', function () {
                // console.log(this.parentNode.parentNode);
                this.parentNode.parentNode.remove();

                //Actualización de los ID's
                trActor = tblActor.querySelectorAll('TR');
                tdId = "";
                cont = trActor.length;

                for (let i = 0; i < trActor.length; i++) {
                    tdId = trActor[i].querySelector('TD DIV P');
                    tdId.innerHTML = cont;
                    cont--;
                }

                //Actualizando resumen
                totalVal1 = document.querySelectorAll('#val1').length;
                totalVal2 = document.querySelectorAll('#val2').length;
                totalVal3 = document.querySelectorAll('#val3').length;

                simpleWeightingActor.innerHTML = totalVal1;
                averageWeightingActor.innerHTML = totalVal2;
                complexWeightingActor.innerHTML = totalVal3;

                txtUUAW = document.querySelector('#txt-uuaw');
                UUAW = totalVal1 * 1 + totalVal2 * 2 + totalVal3 * 3;
                txtUUAW.innerHTML = UUAW;
            });
        }

    }


    const calculateTCF = () => {
        let tcfContent = document.querySelector('#tcf-content');
        let inputsTCF = tcfContent.querySelectorAll('INPUT');
        let totalTCF: number = 0;

        inputsTCF.forEach((inp) => {
            if (inp.value == null || inp.value == 0) {
                totalTCF += 0;
            } else {
                totalTCF += parseInt(inp.value);
            }
            // console.log("val=",inp.value);
        });

        let total_tcf = document.querySelector('#total-TCF');
        total_tcf.innerHTML = (0.6 + 0.01 * totalTCF).toFixed(2);
        console.log(totalTCF);

        calculateCost();

    }



    const calculateECF = () => {
        let ecfContent = document.querySelector('#ecf-content');
        let inputsECF = ecfContent.querySelectorAll('INPUT');
        let totalECF: number = 0;

        inputsECF.forEach((inp) => {
            if (inp.value == null || inp.value == 0) {
                totalECF += 0;
            } else {
                totalECF += parseInt(inp.value);
            }
            // console.log("val=",inp.value);
        });

        let total_ecf = document.querySelector('#total-ECF');
        total_ecf.innerHTML = (1.4 - 0.03 * totalECF).toFixed(2);
        console.log(totalECF);

        calculateCost();

    }

    const calculateCost = () => {
        let resultUucw = document.getElementById('result-uucw');
        let resultUuaw = document.getElementById('result-uuaw');
        let resultTcf = document.getElementById('result-tcf');
        let resultEcf = document.getElementById('result-ecf');


        let uucw = document.getElementById('txt-uucw').innerText;
        let uuaw = document.getElementById('txt-uuaw').innerText;
        let tcf = document.getElementById('total-TCF').innerText;
        let ecf = document.getElementById('total-ECF').innerText;

        resultUucw.innerText = parseFloat(uucw);
        resultUuaw.innerText = parseFloat(uuaw);
        resultTcf.innerText = parseFloat(tcf);
        resultEcf.innerText = parseFloat(ecf);

        let totalUCP = document.getElementById('total-UCP');
        let valUCP = ((parseFloat(uucw) + parseFloat(uuaw)) * parseFloat(tcf) * parseFloat(ecf)).toFixed(2);
        totalUCP.innerText = valUCP;

        // ************************************
        let txtProdHoras = document.getElementById('inp-productividad-horas').value;
        let prodHoras = 0;

        if(txtProdHoras != 0){
            prodHoras = txtProdHoras;
        }

        let totalEsfuerzo = document.getElementById('inp-total-esfuerzo');
        let resultEsfuerzo = valUCP * parseFloat(prodHoras);
        totalEsfuerzo.innerText = resultEsfuerzo;

        // ************************************

        let txtTarifaHora = document.getElementById('inp-tarifa-hora').value;

        let tarifaHora = 0;

        if (txtTarifaHora != 0) {
            tarifaHora = parseFloat(txtTarifaHora);
        }

        let finalCost = document.getElementById('value-final-cost');
        finalCost.innerText = (resultEsfuerzo * tarifaHora).toFixed(2);



        let txtTamanioEquipo = document.getElementById('inp-tamanio-equipo').value;
        let nSemanas = document.getElementById('n-semanas');
        let txtHorasSemanas = document.getElementById('inp-horas-semanas').value;


        let tamanioEquipo = 0;


        if (txtTamanioEquipo != 0) {
            tamanioEquipo = txtTamanioEquipo;
        }

        let horasSemanas = 0;

        if (txtHorasSemanas != 0) {
            horasSemanas = txtHorasSemanas;
        }

        if (tamanioEquipo != 0 && horasSemanas != 0) {

            nSemanas.innerText = (resultEsfuerzo / (horasSemanas * tamanioEquipo)).toFixed(2);
        } else {
            nSemanas.innerText = 0;
        }

    }

    function removeRow() {
        console.log(222);
    }

    return (
        <>
            <Header />

            {/* *********************************************************************************************************** */}

            <div className="fixed top-15 bg-white w-full lg:gap-10 mb-4 border-b border-gray-200 dark:border-gray-700 bg-white">

                <ul className="z-20 flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400" id="tabs-example" role="tablist">
                    <li className="me-2" role="presentation">
                        <button
                            className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                            id="profile-tab-example"
                            type="button"
                            role="tab"
                            aria-controls="profile-example"
                            aria-selected="false"
                        >
                            Casos de uso y Actores
                        </button>
                    </li>
                    <li className="me-2" role="presentation">
                        <button
                            className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                            id="dashboard-tab-example"
                            type="button"
                            role="tab"
                            aria-controls="dashboard-example"
                            aria-selected="false"
                        >
                            Factores Técnicos y Ambientales
                        </button>
                    </li>
                    {/* <li className="me-2" role="presentation">
                        <button
                            className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                            id="settings-tab-example"
                            type="button"
                            role="tab"
                            aria-controls="settings-example"
                            aria-selected="false"
                        >
                            Factores Ambientales
                        </button>
                    </li> */}
                    <li role="presentation">
                        <button
                            className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                            id="contacts-tab-example"
                            type="button"
                            role="tab"
                            aria-controls="contacts-example"
                            aria-selected="false"
                        >
                            Resultado de costo estimado
                        </button>
                    </li >
                </ul>
            </div>

            <br />
            <br />


            <div id="tabContentExample">
                <div
                    className="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
                    id="profile-example"
                    role="tabpanel"
                    aria-labelledby="profile-tab-example"
                >
                    <div className="flex mr-4 ml-4 bg-white">
                        <div className="flex-auto w-50  p-4">

                            {/* input - static */}
                            {/* <div className="fixed top-32 z-20 w-100 bg-white"> */}
                            <div>
                                {/* inputs */}
                                <div className="flex">
                                    <div className="flex-auto w-full p-2">
                                        <label htmlFor="inp-use-case" className="block text-xl font-bold">
                                            Caso de uso
                                        </label>
                                        <input
                                            id="inp-use-case"
                                            type="text"
                                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            required
                                        />
                                    </div>
                                    <div className="flex-auto w-auto p-2">
                                        <label htmlFor="slt-use-case-complexity" className="block text-xl font-bold">
                                            Complejidad
                                        </label>
                                        <select name="" id="slt-use-case-complexity" className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                            <option value="5">5</option>
                                            <option value="10">10</option>
                                            <option value="15">15</option>
                                        </select>
                                    </div>
                                </div>

                                {/* buttons */}
                                <div className="p-2">
                                    <button className="w-32 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        onClick={addUseCase}>
                                        Agregar
                                    </button>
                                    {/* 
                                    <button className="ml-4 w-32 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
                                        Importar
                                    </button> */}
                                </div>
                            </div>

                            {/* <div className="bg-red-500 w-full h-40"> */}
                            {/* espacio */}
                            {/* </div> */}
                            {/* table */}
                            <div className="w-full p-2">

                                {/* start table */}
                                <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">

                                    {/* Summary */}
                                    {/* Totals */}

                                    <div>
                                        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
                                            <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                                Resumen <span className=" text-base">(Total de ponderaciones y UUCW)</span>
                                            </h5>
                                        </div>


                                        {/* summary */}
                                        <div className="p-6 px-0">
                                            <table id=""
                                                className="w-full text-left table-auto min-w-max"
                                            >
                                                <thead>
                                                    <tr>
                                                        <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                                                            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                                                Ponderación Simple
                                                            </p>
                                                        </th>
                                                        <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                                                            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                                                Ponderación Promedio
                                                            </p>
                                                        </th>
                                                        <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                                                            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                                                Ponderación compleja
                                                            </p>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="p-4 border-b border-blue-gray-50">
                                                            <p id="txt-simple-weighting-use-case" className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                                0
                                                            </p>
                                                        </td>
                                                        <td className="p-4 border-b border-blue-gray-50">
                                                            <p id="txt-average-weighting-use-case" className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                                0
                                                            </p>
                                                        </td>
                                                        <td className="p-4 border-b border-blue-gray-50">
                                                            <p id="txt-complex-weighting-use-case" className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                                0
                                                            </p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        {/* <td className="italic p-4 text-left font-bold text-slate-800 border-t border-slate-300">

                                                </td> */}
                                                        <td colspan="2" className="italic p-4 text-right font-bold text-slate-800 border-t border-slate-300">
                                                            Total UUCW <span className="text-sm">(Puntos de  Caso de Uso Sin Ajustar)</span>
                                                        </td>
                                                        <td id="txt-uucw" colspan="1" className="p-4 font-semibold text-slate-800 border-t border-slate-300">
                                                            0
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {/* End summary */}
                                    <hr />


                                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
                                        <br />

                                        <div className="flex flex-col justify-between gap-8 mb-4 md:flex-row md:items-center">
                                            <div>
                                                <h5
                                                    className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                                    Casos de uso
                                                </h5>
                                                {/* <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                                            Estos son los detalles de los casos de uso
                                        </p> */}
                                            </div>
                                            <div className="flex w-full gap-2 shrink-0 md:w-max">
                                                <div className="w-full md:w-72">
                                                    {/* <div className="relative h-10 w-full min-w-[200px]">
                                                        <div
                                                            className="absolute grid w-5 h-5 top-2/4 right-3 -translate-y-2/4 place-items-center text-blue-gray-500">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor" aria-hidden="true" className="w-5 h-5">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                                                            </svg>
                                                        </div>
                                                        <input
                                                            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                                            placeholder=" " />
                                                        <label
                                                            className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                            Buscar
                                                        </label>
                                                    </div> */}
                                                </div>
                                                {/* <button
                                            className="flex select-none items-center gap-3 rounded-lg bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                            type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                                aria-hidden="true" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3">
                                                </path>
                                            </svg>
                                            Download
                                        </button> */}
                                            </div>
                                        </div>
                                    </div>


                                    {/* <div className="p-6 px-0 overflow-scroll"> */}
                                    <div className="p-6 px-0">
                                        <table id="tbl-use-case"
                                            className="w-full text-left table-auto min-w-max"
                                        >
                                            <thead>
                                                <tr>
                                                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                                                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                                            ID
                                                        </p>
                                                    </th>
                                                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                                                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                                            Caso de uso
                                                        </p>
                                                    </th>
                                                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                                                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                                            Complejidad
                                                        </p>
                                                    </th>
                                                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                                                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                                            Estado
                                                        </p>
                                                    </th>
                                                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                                                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                                        </p>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                            </tbody>
                                        </table>

                                    </div>
                                    {/* Paginate */}
                                    {/* <div className="flex justify-between items-center px-4 py-3">
                                <div className="text-sm text-slate-500">
                                    Showing <b>1-5</b> of 45
                                </div>
                                <div className="flex space-x-1">
                                    <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                                        Prev
                                    </button>
                                    <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-white bg-slate-800 border border-slate-800 rounded hover:bg-slate-600 hover:border-slate-600 transition duration-200 ease">
                                        1
                                    </button>
                                    <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                                        2
                                    </button>
                                    <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                                        3
                                    </button>
                                    <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                                        Next
                                    </button>
                                </div>
                            </div> */}
                                </div>

                                {/* end table */}
                            </div>

                        </div>

                        <div className=" flex-auto w-50 p-4">
                            <div>
                                <div className="flex">
                                    <div className="flex-auto w-full p-2">
                                        <label htmlFor="inp-actor" className="block text-xl font-bold">
                                            Actor
                                        </label>
                                        <input
                                            id="inp-actor"
                                            type="text"
                                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            required
                                        />
                                    </div>
                                    <div className="flex-auto w-auto p-2">
                                        <label htmlFor="slt-actor-complexity" className="block text-xl font-bold">
                                            Complejidad
                                        </label>
                                        <select name="" id="slt-actor-complexity" className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="p-2">
                                    <button
                                        className="w-32 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        onClick={addActor}>
                                        Agregar
                                    </button>
                                </div>

                                {/* table */}
                                <div className="w-full p-2">
                                    {/* start table */}
                                    <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">

                                        <div>
                                            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
                                                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                                    Resumen <span className=" text-base">(Total de ponderaciones y UUAW)</span>
                                                </h5>
                                            </div>


                                            {/* summary */}
                                            <div className="p-6 px-0">
                                                <table id=""
                                                    className="w-full text-left table-auto min-w-max"
                                                >
                                                    <thead>
                                                        <tr>
                                                            <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                                                                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                                                    Ponderación Simple
                                                                </p>
                                                            </th>
                                                            <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                                                                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                                                    Ponderación Promedio
                                                                </p>
                                                            </th>
                                                            <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                                                                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                                                    Ponderación compleja
                                                                </p>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="p-4 border-b border-blue-gray-50">
                                                                <p id="txt-simple-weighting-actor" className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                                    0
                                                                </p>
                                                            </td>
                                                            <td className="p-4 border-b border-blue-gray-50">
                                                                <p id="txt-average-weighting-actor" className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                                    0
                                                                </p>
                                                            </td>
                                                            <td className="p-4 border-b border-blue-gray-50">
                                                                <p id="txt-complex-weighting-actor" className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                                    0
                                                                </p>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            {/* <td className="italic p-4 text-left font-bold text-slate-800 border-t border-slate-300">

                                                </td> */}
                                                            <td colspan="2" className="italic p-4 text-right font-bold text-slate-800 border-t border-slate-300">
                                                                Total UUAW <span className="text-sm">(Puntos de  Caso de Uso Sin Ajustar)</span>
                                                            </td>
                                                            <td id="txt-uuaw" colspan="1" className="p-4 font-semibold text-slate-800 border-t border-slate-300">
                                                                0
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        {/* End summary */}
                                        <hr />


                                        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
                                            <div className="flex flex-col justify-between gap-8 mb-4 md:flex-row md:items-center">
                                                <div>
                                                    <h5
                                                        className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                                        Actores
                                                    </h5>
                                                    {/* <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                                                        Estos son los detalles de los actores
                                                    </p> */}
                                                </div>
                                                <div className="flex w-full gap-2 shrink-0 md:w-max">
                                                    <div className="w-full md:w-72">
                                                        {/* <div className="relative h-10 w-full min-w-[200px]">
                                                            <div
                                                                className="absolute grid w-5 h-5 top-2/4 right-3 -translate-y-2/4 place-items-center text-blue-gray-500">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                                    stroke="currentColor" aria-hidden="true" className="w-5 h-5">
                                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                                                                </svg>
                                                            </div>
                                                            <input
                                                                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                                                placeholder=" " />
                                                            <label
                                                                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                                Buscar
                                                            </label>
                                                        </div> */}
                                                    </div>
                                                    {/* <button
                                            className="flex select-none items-center gap-3 rounded-lg bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                            type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                                aria-hidden="true" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3">
                                                </path>
                                            </svg>
                                            Download
                                        </button> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6 px-0 overflow-scroll">
                                            <table id="tbl-actor"
                                                className="w-full text-left table-auto min-w-max">
                                                <thead>
                                                    <tr>
                                                        <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                                                            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                                                ID
                                                            </p>
                                                        </th>
                                                        <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                                                            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                                                Actor
                                                            </p>
                                                        </th>
                                                        <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                                                            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                                                Complejidad
                                                            </p>
                                                        </th>
                                                        <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                                                            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                                                Estado
                                                            </p>
                                                        </th>
                                                        <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                                                            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                                            </p>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                </tbody>
                                            </table>
                                        </div>
                                        {/* Paginate */}
                                        {/* <div className="flex justify-between items-center px-4 py-3">
                                    <div className="text-sm text-slate-500">
                                        Showing <b>1-5</b> of 45
                                    </div>
                                    <div className="flex space-x-1">
                                        <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                                            Prev
                                        </button>
                                        <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-white bg-slate-800 border border-slate-800 rounded hover:bg-slate-600 hover:border-slate-600 transition duration-200 ease">
                                            1
                                        </button>
                                        <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                                            2
                                        </button>
                                        <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                                            3
                                        </button>
                                        <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                                            Next
                                        </button>
                                    </div>
                                </div> */}
                                    </div>

                                    {/* end table */}
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div
                    className="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
                    id="dashboard-example"
                    role="tabpanel"
                    aria-labelledby="dashboard-tab-example"
                >
                    <div className="flex mr-4 ml-4 bg-gray-100">
                        {/* start Tenics factors */}
                        <div id="tcf-content" className="flex-auto p-4 w-50 text-sm bg-white">

                            {/* title and TCF */}
                            <div className="flex p-4">
                                <div className="flex-auto">
                                    <h1 className="font-bold text-xl">Factores Técnicos</h1>
                                </div>
                                <div className="flex flex-auto justify-end">
                                    <h1 className="font-bold text-xl">TCF <span className="italic text-base">(Technical Complexity Factor)</span> = <span id="total-TCF">0.6</span></h1>
                                </div>
                            </div>
                            {/* end title and TCF */}

                            {/* super caja de inputs -2*/}
                            <div className="flex">


                                <div className="flex-auto w-1/4 p-4">
                                    <label htmlFor="tcf1" className="block text-sm text-gray-600">
                                        Requisitos de rendimiento
                                    </label>
                                    <input type="number"
                                        id="tcf1"
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="De 0 a 5"
                                        min="0"
                                        max="5"
                                        onBlur={calculateTCF}
                                    />
                                </div>

                                <div className=" flex-auto w-1/4 bg-black-200 p-4">
                                    <label htmlFor="tcf2" className="block text-sm text-gray-600">
                                        Sistemas distribuidos
                                    </label>
                                    <input type="number"
                                        id="tcf2"
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="De 0 a 5"
                                        min="0"
                                        max="5"
                                        onBlur={calculateTCF}
                                    />
                                </div>
                            </div>
                            {/* end supercaja de inputs 2 */}
                            {/* super caja de inputs -2*/}
                            <div className="flex">


                                <div className="flex-auto w-1/4 p-4">
                                    <label htmlFor="tcf3" className="block text-sm text-gray-600">
                                        Alta frecuencia de transacciones
                                    </label>
                                    <input type="number"
                                        id="tcf3"
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="De 0 a 5"
                                        min="0"
                                        max="5"
                                        onBlur={calculateTCF}
                                    />
                                </div>

                                <div className=" flex-auto w-1/4 bg-black-200 p-4">
                                    <label htmlFor="tcf4" className="block text-sm text-gray-600">
                                        Entrada de datos compleja
                                    </label>
                                    <input type="number"
                                        id="tcf4"
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="De 0 a 5"
                                        min="0"
                                        max="5"
                                        onBlur={calculateTCF}
                                    />
                                </div>
                            </div>
                            {/* end supercaja de inputs 2 */}

                            {/* super caja de inputs -2*/}
                            <div className="flex">


                                <div className="flex-auto w-1/4 p-4">
                                    <label htmlFor="tcf5" className="block text-sm text-gray-600">
                                        Proceso interno complejo
                                    </label>
                                    <input type="number"
                                        id="tcf5"
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="De 0 a 5"
                                        min="0"
                                        max="5"
                                        onBlur={calculateTCF}
                                    />
                                </div>

                                <div className=" flex-auto w-1/4 bg-black-200 p-4">
                                    <label htmlFor="tcf6" className="block text-sm text-gray-600">
                                        Código reutilizable
                                    </label>
                                    <input type="number"
                                        id="tcf6"
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="De 0 a 5"
                                        min="0"
                                        max="5"
                                        onBlur={calculateTCF}
                                    />
                                </div>
                            </div>
                            {/* end supercaja de inputs 2 */}

                            {/* super caja de inputs -2*/}
                            <div className="flex">


                                <div className="flex-auto w-1/4 p-4">
                                    <label htmlFor="tcf7" className="block text-sm text-gray-600">
                                        Instalación en múltiples sitios
                                    </label>
                                    <input type="number"
                                        id="tcf7"
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="De 0 a 5"
                                        min="0"
                                        max="5"
                                        onBlur={calculateTCF}
                                    />
                                </div>

                                <div className=" flex-auto w-1/4 bg-black-200 p-4">
                                    <label htmlFor="tcf8" className="block text-sm text-gray-600">
                                        Soporte para facilitar cambios
                                    </label>
                                    <input type="number"
                                        id="tcf8"
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="De 0 a 5"
                                        min="0"
                                        max="5"
                                        onBlur={calculateTCF}
                                    />
                                </div>
                            </div>
                            {/* end supercaja de inputs 2 */}

                            {/* super caja de inputs -2*/}
                            <div className="flex">


                                <div className="flex-auto w-1/4 p-4">
                                    <label htmlFor="tcf9" className="block text-sm text-gray-600">
                                        Interfaces de usuario específicas
                                    </label>
                                    <input type="number"
                                        id="tcf9"
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="De 0 a 5"
                                        min="0"
                                        max="5"
                                        onBlur={calculateTCF}
                                    />
                                </div>

                                <div className=" flex-auto w-1/4 bg-black-200 p-4">
                                    <label htmlFor="tcf10" className="block text-sm text-gray-600">
                                        Interfaces externas
                                    </label>
                                    <input type="number"
                                        id="tcf10"
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="De 0 a 5"
                                        min="0"
                                        max="5"
                                        onBlur={calculateTCF}
                                    />
                                </div>
                            </div>
                            {/* end supercaja de inputs 2 */}

                            {/* super caja de inputs -2*/}
                            <div className="flex">


                                <div className="flex-auto w-1/4 p-4">
                                    <label htmlFor="tcf11" className="block text-sm text-gray-600">
                                        Necesidad de recuperación ante fallos
                                    </label>
                                    <input type="number"
                                        id="tcf11"
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="De 0 a 5"
                                        min="0"
                                        max="5"
                                        onBlur={calculateTCF}
                                    />
                                </div>

                                <div className=" flex-auto w-1/4 bg-black-200 p-4">
                                    <label htmlFor="tcf12" className="block text-sm text-gray-600">
                                        Seguridad de datos
                                    </label>
                                    <input type="number"
                                        id="tcf12"
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="De 0 a 5"
                                        min="0"
                                        max="5"
                                        onBlur={calculateTCF}
                                    />
                                </div>
                            </div>
                            {/* end supercaja de inputs 2 */}

                            {/* super caja de inputs -2*/}
                            <div className="flex">


                                <div className="flex-auto w-1/4 p-4">
                                    <label htmlFor="tcf13" className="block text-sm text-gray-600">
                                        Capacidades de formación y soporte
                                    </label>
                                    <input type="number"
                                        id="tcf13"
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="De 0 a 5"
                                        min="0"
                                        max="5"
                                        onBlur={calculateTCF}
                                    />
                                </div>

                                <div className=" flex-auto w-1/4 bg-black-200 p-4">
                                    <label htmlFor="" className="block text-sm text-gray-600">
                                        <br />
                                    </label>
                                    <input type="hidden"
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>
                            </div>
                            {/* end supercaja de inputs 2 */}
                        </div>
                        {/* end Tenics factors */}

                        <div id="ecf-content" className="flex-auto p-4 w-50 text-sm bg-white border-l-2 border-gray-500">
                            {/* title and TCF */}
                            <div className="flex p-4">
                                <div className="flex-auto">
                                    <h1 className="font-bold text-xl">Factores Ambientales</h1>
                                </div>
                                <div className="flex flex-auto justify-end">
                                    <h1 className="font-bold text-xl">ECF <span className="italic text-base">(Environmental Complexity Factor)</span> = <span id="total-ECF">1.4</span></h1>
                                </div>
                            </div>
                            {/* end title and TCF */}


                            {/* super caja de inputs -2*/}
                            <div className="flex">


                                <div className="flex-auto p-4">
                                    <label htmlFor="ecf1" className="block text-sm text-gray-600">
                                        Familiaridad con los procesos del proyecto
                                    </label>
                                    <input type="number"
                                        id="ecf1"
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="De 0 a 5"
                                        min="0"
                                        max="5"
                                        onBlur={calculateECF}
                                    />
                                </div>

                                <div className=" flex-auto bg-black-200 p-4">
                                    <label htmlFor="ecf2" className="block text-sm text-gray-600">
                                        Experiencia en el dominio de la aplicación
                                    </label>
                                    <input type="number"
                                        id="ecf2"
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="De 0 a 5"
                                        min="0"
                                        max="5"
                                        onBlur={calculateECF}
                                    />
                                </div>
                            </div>
                            {/* end supercaja de inputs 2 */}

                            {/* super caja de inputs -2*/}
                            <div className="flex">


                                <div className="flex-auto p-4">
                                    <label htmlFor="ecf3" className="block text-sm text-gray-600">
                                        Experiencia en tecnología utilizada
                                    </label>
                                    <input type="number"
                                        id="ecf3"
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="De 0 a 5"
                                        min="0"
                                        max="5"
                                        onBlur={calculateECF}
                                    />
                                </div>

                                <div className=" flex-auto bg-black-200 p-4">
                                    <label htmlFor="ecf4" className="block text-sm text-gray-600">
                                        Estabilidad de los requisitos
                                    </label>
                                    <input type="number"
                                        id="ecf4"
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="De 0 a 5"
                                        min="0"
                                        max="5"
                                        onBlur={calculateECF}
                                    />
                                </div>
                            </div>
                            {/* end supercaja de inputs 2 */}


                            {/* super caja de inputs -2*/}
                            <div className="flex">


                                <div className="flex-auto p-4">
                                    <label htmlFor="ecf5" className="block text-sm text-gray-600">
                                        Experiencia en análisis orientado a objetos
                                    </label>
                                    <input type="number"
                                        id="ecf5"
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="De 0 a 5"
                                        min="0"
                                        max="5"
                                        onBlur={calculateECF}
                                    />
                                </div>

                                <div className=" flex-auto bg-black-200 p-4">
                                    <label htmlFor="ecf6" className="block text-sm text-gray-600">
                                        Motivación del equipo
                                    </label>
                                    <input type="number"
                                        id="ecf6"
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="De 0 a 5"
                                        min="0"
                                        max="5"
                                        onBlur={calculateECF}
                                    />
                                </div>
                            </div>
                            {/* end supercaja de inputs 2 */}


                            {/* super caja de inputs -2*/}
                            <div className="flex">


                                <div className="flex-auto p-4">
                                    <label htmlFor="ecf7" className="block text-sm text-gray-600">
                                        Tamaño del equipo
                                    </label>
                                    <input type="number"
                                        id="ecf7"
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="De 0 a 5"
                                        min="0"
                                        max="5"
                                        onBlur={calculateECF}
                                    />
                                </div>

                                <div className=" flex-auto bg-black-200 p-4">
                                    <label htmlFor="ecf8" className="block text-sm text-gray-600">
                                        Herramientas de soporte para el desarrollo
                                    </label>
                                    <input type="number"
                                        id="ecf8"
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="De 0 a 5"
                                        min="0"
                                        max="5"
                                        onBlur={calculateECF}
                                    />
                                </div>
                            </div>
                            {/* end supercaja de inputs 2 */}





                        </div>
                    </div>


                </div>
                <div
                    className="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
                    id="settings-example"
                    role="tabpanel"
                    aria-labelledby="settings-tab-example"
                >
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        This is some placeholder content the
                        <strong className="font-medium text-gray-800 dark:text-white"
                        >Settings tab's associated content</strong
                        >. Clicking another tab will toggle the visibility of this one for
                        the next. The tab JavaScript swaps classNamees to control the content
                        visibility and styling.
                    </p>
                </div>
                <div
                    className=" z-10 hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800 bg-white w-full"
                    id="contacts-example"
                    role="tabpanel"
                    aria-labelledby="contacts-tab-example"
                >
                    {/* results */}
                    <div className="w-1/2 mx-auto bg-white">
                        <div className="flex-auto w-full p-2">
                            <label htmlFor="inp-actor" className="block text-2xl font-bold">
                                Resultado de Costo Estimado
                            </label>

                        </div>



                        <div className="p-6 px-0 z-10">

                            <table className="w-full text-left table-auto min-w-max z-10">
                                <thead>
                                    <tr>
                                        <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                                            <p className=" block font-sans text-sm  font-normal text-gray-600">
                                                UUCW                                            </p>
                                        </th>
                                        <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-none text-gray-600">
                                                UUAW
                                            </p>
                                        </th>
                                        <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-none text-gray-600">
                                                TCF
                                            </p>
                                        </th>
                                        <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-none text-gray-600">
                                                ECF
                                            </p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <p id="result-uucw" className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                0
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <p id="result-uuaw" className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                0
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <p id="result-tcf" className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">

                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <p id="result-ecf" className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">

                                            </p>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td colSpan="3" className="p-4 border-b border-blue-gray-50 bg-gray-200">
                                            <p className=" text-right block font-sans text-base antialiased font-bold leading-normal text-blue-gray-900">
                                                UCP<span className="italic text-base"> (Esfuerzo estimado)</span>
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50 bg-gray-200">
                                            <p id="total-UCP" className="block font-sans text-xl antialiased font-normal leading-normal text-blue-gray-900">
                                                00.00
                                            </p>
                                        </td>

                                    </tr>
                                    {/* **********************Tarifa y productividad ******************** */}
                                    <tr>
                                        <td colSpan="3" className="w-10/12 p-4 border-b border-blue-gray-50">
                                            <p className=" text-right block font-sans text-base antialiased font-bold leading-normal text-blue-gray-900">
                                                Productividad <span className="italic text-base">(horas)</span>
                                            </p>
                                        </td>
                                        <td className="flex w-full p-4 border-b border-blue-gray-50 ">

                                            <input onBlur={calculateCost} id="inp-productividad-horas" type="number" className="flex-auto w-1 px-4 py-1 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="0.00" />

                                        </td>

                                    </tr>
                                    <tr>
                                        <td colSpan="3" className="p-4 border-b border-blue-gray-50">
                                            <p className=" text-right block font-sans text-base antialiased font-bold leading-normal text-blue-gray-900">
                                                Esfuerzo <span className="italic text-base">(horas)</span>
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <p id="inp-total-esfuerzo" className="block font-sans text-xl antialiased font-normal leading-normal text-blue-gray-900">
                                                00.00
                                            </p>
                                        </td>

                                    </tr>
                                    {/* ********************** ******************** */}
                                    <tr>
                                        <td colSpan="3" className="w-10/12 p-4 border-b border-blue-gray-50">
                                            <p className=" text-right block font-sans text-base antialiased font-bold leading-normal text-blue-gray-900">
                                                Tarifa por hora <span className="italic text-base">($)</span>
                                            </p>
                                        </td>
                                        <td className="flex w-full p-4 border-b border-blue-gray-50 ">

                                            <input onBlur={calculateCost} id="inp-tarifa-hora" type="number" className="flex-auto w-1 px-4 py-1 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="0.00" />

                                        </td>

                                    </tr>
                                    <tr>
                                        <td colSpan="3" className="p-4 border-b border-blue-gray-50 bg-indigo-100">
                                            <p className="text-xl text-right block font-sans text-base antialiased font-bold leading-normal text-blue-gray-900">
                                                Costo<span className="italic text-base"></span>
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50 bg-indigo-100">
                                            <p id="final-cost" className="block font-sans text-xl antialiased font-normal leading-normal text-blue-gray-900">
                                                $ <span id="value-final-cost">00.00</span>
                                            </p>
                                        </td>

                                    </tr>

                                    <tr>
                                        <td colSpan="3" className="w-10/12 p-4 border-b border-blue-gray-50">
                                            <p className=" text-right block font-sans text-base antialiased font-bold leading-normal text-blue-gray-900">
                                                Tamaño del equipo
                                            </p>
                                        </td>
                                        <td className="flex w-full p-4 border-b border-blue-gray-50 ">

                                            <input onBlur={calculateCost} id="inp-tamanio-equipo" type="number" className="flex-auto w-1 px-4 py-1 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="0" />

                                        </td>


                                    </tr>

                                    <tr>
                                        <td colSpan="3" className="w-10/12 p-4 border-b border-blue-gray-50">
                                            <p className=" text-right block font-sans text-base antialiased font-bold leading-normal text-blue-gray-900">
                                                Horas por semana
                                            </p>
                                        </td>
                                        <td className="flex w-full p-4 border-b border-blue-gray-50">

                                            <input onBlur={calculateCost} id="inp-horas-semanas" type="number" className="flex-auto w-1 px-4 py-1 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="0" />

                                        </td>


                                    </tr>

                                    <tr>
                                        <td colSpan="3" className="p-4 border-b border-blue-gray-50 bg-indigo-100">
                                            <p className="text-xl text-right block font-sans text-base antialiased font-bold leading-normal text-blue-gray-900">
                                                Duración<span className="italic text-base"> (semanas)</span>
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50 bg-indigo-100">
                                            <p id="final-cost" className="block font-sans text-xl antialiased font-normal leading-normal text-blue-gray-900">
                                                <span id="n-semanas">0</span>
                                            </p>
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>


                </div>
            </div>


        </>

    );
};

export default EstimadorCostos;
