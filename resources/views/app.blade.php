<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title inertia>{{ config('app.name', 'Laravel') }}</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta http-equiv="Cache-Control" content="no-store, no-cache, must-revalidate, max-age=0">
        <meta http-equiv="Pragma" content="no-cache">
        <meta http-equiv="Expires" content="Sat, 01 Jan 2000 00:00:00 GMT">
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead
    </head>
    <body class="dark:bg-neutral-800 bg-neutral-100 dark:text-white">
        @inertia

        <script src="/assets/js/lib/jquery-3.7.1.min.js"></script>
        <script src="/assets/js/lib/simple-datatables.min.js"></script>
        <!-- Iconify Font js -->
        <script src="/assets/js/lib/iconify-icon.min.js"></script>
        <!-- jQuery UI js -->
        <script src="/assets/js/lib/jquery-ui.min.js"></script>
        <!-- Vector Map js -->
        <script src="/assets/js/lib/jquery-jvectormap-2.0.5.min.js"></script>
        <script src="/assets/js/lib/jquery-jvectormap-world-mill-en.js"></script>
        <!-- Popup js -->
        <script src="/assets/js/lib/magnifc-popup.min.js"></script>
        <!-- Slick Slider js -->
        <script src="/assets/js/lib/slick.min.js"></script>
        <!-- prism js -->
        <script src="/assets/js/lib/prism.js"></script>
        <!-- file upload js -->
        <script src="/assets/js/lib/file-upload.js"></script>
        <!-- audio player -->
        <script src="/assets/js/lib/audioplayer.js"></script>
        
        <script src="/assets/js/flowbite.min.js"></script>
        <!-- main js -->
        <script src="/assets/js/app.js"></script>

      

    </body>
  
</html>
