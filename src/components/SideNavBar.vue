<template>
    <div class="border">
        <aside class="w-13" aria-label="Sidebar">
            <div class="p-1.5">
                <img src="../assets/vue.svg" />
            </div>

            <div class="overflow-y-auto py-4 p-1.5 rounded bg-gray-900">
                <!-- <a href="#" class="flex items-center pl-2.5 mb-5">
                <svg width="32" height="32" viewBox="0 0 256 256" class="mr-0 h-10 sm:h-7">
                    <defs>
                        <linearGradient id="svgIDa" x1="35.871%" x2="60.314%" y1="7.224%" y2="115.988%">
                            <stop offset="0%" stop-color="#66E3FF" />
                            <stop offset="100%" stop-color="#7064F9" />
                        </linearGradient>
                        <linearGradient id="svgIDb" x1="39.172%" x2="55.05%" y1="0%" y2="99.181%">
                            <stop offset="0%" stop-color="#66E3FF" />
                            <stop offset="100%" stop-color="#7064F9" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#svgIDa)"
                        d="m50.699 159.089l156.225-52.153c-3.122-19.523-5.346-32.565-7.924-42.518c-2.777-10.706-4.978-13.57-5.842-14.563a30.468 30.468 0 0 0-10.973-7.969c-1.216-.52-4.625-1.728-15.654-1.064c-11.669.704-26.987 3.088-51.245 6.929c-24.25 3.84-39.56 6.313-50.87 9.241c-10.7 2.777-13.573 4.985-14.566 5.85a30.581 30.581 0 0 0-7.963 10.97c-.52 1.215-1.729 4.624-1.064 15.658c.704 11.665 3.089 26.988 6.93 51.24c1.073 6.8 2.041 12.882 2.946 18.379Z" />
                    <path fill="url(#svgIDb)"
                        d="M7.625 147.063c-7.427-46.92-11.149-70.38-3.098-89.214a71.092 71.092 0 0 1 18.6-25.605c15.423-13.466 38.88-17.178 85.796-24.611C155.854.19 179.313-3.521 198.16 4.528a71.085 71.085 0 0 1 25.595 18.595c13.477 15.426 17.19 38.886 24.618 85.814c7.435 46.92 11.149 70.387 3.097 89.214a71.076 71.076 0 0 1-18.591 25.604c-15.423 13.474-38.889 17.187-85.812 24.62c-46.916 7.433-70.382 11.146-89.213 3.096a71.093 71.093 0 0 1-25.595-18.595C18.781 217.45 15.068 193.99 7.633 147.063h-.008Zm82.762 83.325c12.565-.76 28.748-3.296 52.702-7.09c23.962-3.792 40.12-6.384 52.318-9.545c11.805-3.064 17.247-6.049 20.76-9.121a45.696 45.696 0 0 0 11.95-16.459c1.84-4.288 3-10.385 2.264-22.563c-.76-12.562-3.297-28.749-7.09-52.705c-3.794-23.955-6.38-40.126-9.54-52.312c-3.066-11.81-6.059-17.25-9.124-20.763a45.699 45.699 0 0 0-16.455-11.954c-4.29-1.84-10.388-3-22.57-2.265c-12.565.76-28.74 3.297-52.701 7.09c-23.954 3.8-40.121 6.385-52.31 9.545c-11.813 3.065-17.247 6.057-20.76 9.122a45.704 45.704 0 0 0-11.958 16.458c-1.833 4.289-2.993 10.386-2.257 22.564c.76 12.57 3.29 28.748 7.091 52.704c3.794 23.956 6.379 40.127 9.54 52.313c3.065 11.81 6.05 17.25 9.124 20.763a45.707 45.707 0 0 0 16.455 11.954c4.29 1.84 10.38 3 22.57 2.264h-.009Z" />
                </svg>
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a> -->
                <ul class="space-y-2">

                    <li>
                        <a href="#"
                            class="flex items-center p-1.5 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true"
                                class="overflow-cli scale-100 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                            </svg>
                            <span class="ml-0"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex items-center p-1.5 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true"
                                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                </path>
                            </svg>
                            <span class="flex-1 ml-3 whitespace-nowrap"></span>
                            <!-- <span
                            class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> -->
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex items-center p-1.5 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true"
                                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z">
                                </path>
                                <path
                                    d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z">
                                </path>
                            </svg>
                            <span class="flex-1 ml-3 whitespace-nowrap"></span>
                            <!-- <span
                            class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span> -->
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex items-center p-1.5 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true"
                                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="flex-1 ml-3 whitespace-nowrap"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex items-center p-1.5 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true"
                                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="flex-1 ml-3 whitespace-nowrap"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex items-center p-1.5 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true"
                                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="flex-1 ml-3 whitespace-nowrap"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex items-center p-1.5 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true"
                                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="flex-1 ml-3 whitespace-nowrap"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped>
aside {
    position: absolute;
    top: 0;
    left: 0;
    border-right: 1px solid #212b3d;
    width: 52px;
}
</style>