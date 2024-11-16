<script  lang="ts">
	import { page } from '$app/stores';
  import { getAuthCookie, logout } from '$lib/auth';
    import { onMount } from 'svelte';
    import type { User } from '../../types';
     let user: User;
  function handleLogout() {
      logout();
      window.location.href = '/';
  }

  onMount(async () => {
    user = getAuthCookie();
  });
  
 
</script>

<!-- Nav header start -->
<div class="nav-header bg-white   shadow-sm shadow-gray-200 ">
  <!-- <li aria-current={$page.url.pathname === '/admin' ? 'page' : undefined}>
 -->
    <a href="/admin" class="brand-logo">
   <!--   <img src="/lebedoo_inline_logo_svg.svg" class=" logo-abbr " alt="" > -->
   <img src="/lebedoo_logo.png" class="logo-abbr" alt="" style="height: 45px;background: white; margin-top:3px;">
     <img src="/lebedoo_inline_logo.png" alt="Logo" class=" brand-title " style="height: 32px;background: tr; margin-top:10px;margin-left: -7px;"/>
     <!-- Logo petit -->
    <!--  <img src="/lebedoo_inline_logo_svg.svg" alt="Logo" class="block md:hidden w-16" /> -->
<!--    <img src="/lebedoo_logo.png" class=" brand-title" alt="" style="height: 49px;background: white; margin-top:6px;"> -->
       
    <!--   <svg class="logo-abbr" width="39" height="23" viewBox="0 0 39 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path class="w3" d="M32.0362 22H19.0466L20.7071 18.7372C20.9559 18.2484 21.455 17.9378 22.0034 17.9305L31.1036 17.8093C33.0753 17.6497 33.6571 15.9246 33.7015 15.0821C33.7015 13.2196 32.1916 12.5765 31.4367 12.4878H23.7095L25.9744 8.49673H30.4375C31.8763 8.3903 32.236 7.03332 32.236 6.36814C32.3426 4.93133 30.9482 4.61648 30.2376 4.63865H28.6955C28.2646 4.63865 27.9788 4.19212 28.1592 3.8008L29.7047 0.44798C31.0903 0.394765 32.8577 0.780573 33.5683 0.980129C38.6309 3.42801 37.0988 7.98676 35.6999 9.96014C38.1513 11.9291 38.4976 14.3282 38.3644 15.2816C38.098 20.1774 34.0346 21.8005 32.0362 22Z" fill="var(--primary)"/>
      <path class="react-w" d="M9.89261 21.4094L0 2.80536H4.86354C5.41354 2.80536 5.91795 3.11106 6.17246 3.59864L12.4032 15.5355C12.6333 15.9762 12.6261 16.5031 12.3842 16.9374L9.89261 21.4094Z" fill="white"/>
      <path class="react-w" d="M17.5705 21.4094L7.67786 2.80536H12.5372C13.0894 2.80536 13.5954 3.11351 13.8489 3.60412L20.302 16.0939L17.5705 21.4094Z" fill="white"/>
      <path class="react-w" d="M17.6443 21.4094L28.2751 0H23.4513C22.8806 0 22.361 0.328884 22.1168 0.844686L14.8271 16.2416L17.6443 21.4094Z" fill="white"/>
      <path class="react-w" d="M9.89261 21.4094L0 2.80536H4.86354C5.41354 2.80536 5.91795 3.11106 6.17246 3.59864L12.4032 15.5355C12.6333 15.9762 12.6261 16.5031 12.3842 16.9374L9.89261 21.4094Z" stroke="white"/>
      <path class="react-w" d="M17.5705 21.4094L7.67786 2.80536H12.5372C13.0894 2.80536 13.5954 3.11351 13.8489 3.60412L20.302 16.0939L17.5705 21.4094Z" stroke="white"/>
      <path class="react-w" d="M17.6443 21.4094L28.2751 0H23.4513C22.8806 0 22.361 0.328884 22.1168 0.844686L14.8271 16.2416L17.6443 21.4094Z" stroke="white"/>
      </svg>
      <svg class="brand-title" width="47" height="16" viewBox="0 0 47 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.36 15.2C7.2933 15.2 6.3 15.0267 5.38 14.68C4.4733 14.32 3.68 13.82 3 13.18C2.3333 12.5267 1.8133 11.76 1.44 10.88C1.0667 9.99999 0.880005 9.03999 0.880005 7.99999C0.880005 6.95999 1.0667 5.99999 1.44 5.11999C1.8133 4.23999 2.34 3.47999 3.02 2.83999C3.7 2.18666 4.49331 1.68666 5.40001 1.33999C6.30671 0.979988 7.3 0.799988 8.38 0.799988C9.5267 0.799988 10.5733 0.999988 11.52 1.39999C12.4667 1.78666 13.2667 2.36666 13.92 3.13999L12.24 4.71999C11.7333 4.17332 11.1667 3.76666 10.54 3.49999C9.9133 3.21999 9.2333 3.07999 8.5 3.07999C7.7667 3.07999 7.0933 3.19999 6.48 3.43999C5.88 3.67999 5.35331 4.01999 4.90001 4.45999C4.46001 4.89999 4.1133 5.41999 3.86 6.01999C3.62 6.61999 3.5 7.27999 3.5 7.99999C3.5 8.71999 3.62 9.37999 3.86 9.97999C4.1133 10.58 4.46001 11.1 4.90001 11.54C5.35331 11.98 5.88 12.32 6.48 12.56C7.0933 12.8 7.7667 12.92 8.5 12.92C9.2333 12.92 9.9133 12.7867 10.54 12.52C11.1667 12.24 11.7333 11.82 12.24 11.26L13.92 12.86C13.2667 13.62 12.4667 14.2 11.52 14.6C10.5733 15 9.52 15.2 8.36 15.2ZM16.4113 15V0.999988H22.1713C23.4113 0.999988 24.4713 1.19999 25.3513 1.59999C26.2446 1.99999 26.9313 2.57332 27.4113 3.31999C27.8913 4.06666 28.1313 4.95332 28.1313 5.97999C28.1313 7.00669 27.8913 7.89329 27.4113 8.63999C26.9313 9.37329 26.2446 9.93999 25.3513 10.34C24.4713 10.7267 23.4113 10.92 22.1713 10.92H17.8513L19.0113 9.73999V15H16.4113ZM25.5713 15L22.0313 9.91999H24.8112L28.3713 15H25.5713ZM19.0113 10.02L17.8513 8.77999H22.0513C23.1979 8.77999 24.0579 8.53329 24.6312 8.03999C25.2179 7.54669 25.5113 6.85999 25.5113 5.97999C25.5113 5.08666 25.2179 4.39999 24.6312 3.91999C24.0579 3.43999 23.1979 3.19999 22.0513 3.19999H17.8513L19.0113 1.91999V10.02ZM31.0402 15V0.999988H33.1802L39.3002 11.22H38.1802L44.2002 0.999988H46.3402L46.3602 15H43.9002L43.8802 4.85999H44.4002L39.2802 13.4H38.1202L32.9202 4.85999H33.5202V15H31.0402Z" fill="white"/>
      </svg>  -->
    </a>
  <!-- </li> -->
  <div class="nav-control bg-white">
      <div class="hamburger">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
      </div>
  </div>
</div>
<!-- Nav header end -->

<!-- Chat box start -->
<div class="chatbox max-sm:w-[17.5rem] w-[21.25rem] h-[100vh] bg-white dark:bg-[#242424] z-[999] duration-500 fixed top-0 right-[-31.25rem] shadow-[0rem_0rem_1.875rem_0rem_rgba(82,63,105,0.15)]">
<div class="chatbox-close"></div>
<div class="dz-tab-area">
<ul class="nav nav-tabs flex justify-between flex-wrap bg-primary-light p-4 pb-0">
<li class="nav-item">
  <a class="nav-link px-4 py-2 text-primary uppercase opacity-70 border-b-[0.1875rem] border-transparent block duration-500 font-semibold text-sm hover:opacity-100 tab-btn" href="javascript:void(0);" data-tab="notes-tab">Notes</a>
</li>
<li class="nav-item">
  <a class="nav-link px-4 py-2 text-primary uppercase opacity-70 border-b-[0.1875rem] border-transparent block duration-500 font-semibold text-sm hover:opacity-100 tab-btn" href="javascript:void(0);" data-tab="alerts-tab">Alerts</a>
</li>
<li class="nav-item">
  <a class="nav-link px-4 py-2 text-primary uppercase opacity-70 border-b-[0.1875rem] border-transparent block duration-500 font-semibold text-sm hover:opacity-100 active tab-btn" href="javascript:void(0);" data-tab="chat-tab">Chat</a>
</li>
</ul>
<div class="tab-content-area">
<div class="tab-content active show" id="chat-tab">
  <div class="card sm:mb-4 mb-0 contacts_card dz-chat-user-box">
    <div class="card-body contacts_body p-0 dz-scroll overflow-y-scroll overflow-x-hidden relative" id="DZ_W_Contacts_Body">
      <ul class="contacts">
        <li class="name-first-letter py-1 px-4 bg-primary-lighter sticky z-[1] top-0 font-semibold border-b border-[#eee] dark:border-[#444444] cursor-pointer">A</li>
        <li class="dz-chat-user border-b border-[#eee] dark:border-[#444444] py-3 px-4 cursor-pointer hover:bg-primary-light">
          <div class="flex items-center bd-highlight">
            <div class="img_cont flex items-center justify-center w-10 h-10 bg-[#eee] rounded-full text-[13px] text-center font-semibold self-start mr-2.5 relative">
              <img src="/assets/images/avatar/1.jpg" class="rounded-full w-full" alt="">
              <span class="online_icon absolute w-3 h-3 rounded-full right-[-0.0625rem] bottom-0 border-2 border-white dark:border-[#444444]"></span>
            </div>
            <div class="user_info">
              <span class="text-black dark:text-white text-[0.9375rem] mb-[0.3125rem] block max-w-[10.625rem] font-medium leading-[1.2]">Konate Hamed</span>
              <p class="text-[0.8125rem] text-body-color leading-[1.2] max-w-[10.625rem]">Konate est online</p>
            </div>
          </div>
        </li>
        
      </ul>
    </div>
  </div>
  <div class="card chat dz-chat-history-box hidden">
    <div class="card-header chat-list-header text-center flex justify-between py-[0.9375rem] px-[1.25rem] items-center border-b border-[#E6E6E6] relative dark:border-[#444444]">
      <a href="javascript:void(0);"  class="dz-chat-history-back w-[1.875rem] h-[1.875rem] bg-primary-light rounded-md flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polygon points="0 0 24 0 24 24 0 24"/><rect fill="#000000" opacity="0.3" transform="translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000) " x="14" y="7" width="2" height="10" rx="1"/><path d="M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997) "/></g></svg>
      </a>
      <div>
        <h6 class="mb-1 text-[0.9375rem]">User lebedoo</h6>
        <p class="mb-0 text-xs leading-[1.2] text-success">Online</p>
      </div>							
      <div class="dropdown relative">
       
      </div>
    </div>
    <div class="contacts_body style-1 p-4 dz-scroll overflow-y-scroll overflow-x-hidden relative" id="DZ_W_Contacts_Body3">
      <div class="flex justify-start mb-6">
        <div class="img_cont_msg block w-[1.875rem] h-[1.875rem] text-[13px] text-center font-semibold">
          <img src="/assets/images/avatar/1.jpg" class="rounded-full w-full" alt="">
        </div>
        <div class="msg_cotainer ml-2.5 bg-primary text-white py-2.5 px-[0.9375rem] relative rounded-md rounded-ss-none text-sm">
          Hi, how are you samim?
          <span class="text-[0.6875rem] mt-[0.3125rem] block text-white opacity-50 msg_time">8:40 AM, Today</span>
        </div>
      </div>
      
    </div>
  </div>
</div>
</div>
</div>
</div>
<!-- Chat box End -->

<!-- Header start -->
<div class="header bg-white">
  <div class="header-content">
      <nav class="navbar navbar-expand">
          <div class="navbar-collapse justify-between">
              <div class="header-left">
              </div>
             <ul class="navbar-nav header-right flex flex-row h-full">
    <li class="nav-item dropdown notification_dropdown flex justify-center relative">
      <a class="nav-link relative p-[0.8375rem] text-[#464a53] text-lg leading-[1] block duration-500 bell dz-theme-mode"  href="javascript:void(0);">
        <svg id="icon-light" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256">
        <g fill="#ffffff" stroke="none" stroke-width="1" ><g  transform="scale(5.3)" ><path d="M24.90625,3.96875c-0.04297,0.00781 -0.08594,0.01953 -0.125,0.03125c-0.46484,0.10547 -0.79297,0.52344 -0.78125,1v6c-0.00391,0.35938 0.18359,0.69531 0.49609,0.87891c0.3125,0.17969 0.69531,0.17969 1.00781,0c0.3125,-0.18359 0.5,-0.51953 0.49609,-0.87891v-6c0.01172,-0.28906 -0.10547,-0.56641 -0.3125,-0.76172c-0.21094,-0.19922 -0.49609,-0.29687 -0.78125,-0.26953zM10.65625,9.84375c-0.375,0.06641 -0.67578,0.33984 -0.78125,0.70313c-0.10547,0.36719 0.00391,0.75781 0.28125,1.01563l4.25,4.25c0.24219,0.29688 0.62891,0.43359 1.00391,0.34766c0.37109,-0.08594 0.66406,-0.37891 0.75,-0.75c0.08594,-0.375 -0.05078,-0.76172 -0.34766,-1.00391l-4.25,-4.25c-0.20703,-0.22266 -0.50781,-0.33594 -0.8125,-0.3125c-0.03125,0 -0.0625,0 -0.09375,0zM39.03125,9.84375c-0.22656,0.03125 -0.4375,0.14453 -0.59375,0.3125l-4.25,4.25c-0.29687,0.24219 -0.43359,0.62891 -0.34766,1.00391c0.08594,0.37109 0.37891,0.66406 0.75,0.75c0.375,0.08594 0.76172,-0.05078 1.00391,-0.34766l4.25,-4.25c0.3125,-0.29687 0.40234,-0.76172 0.21875,-1.15234c-0.1875,-0.39453 -0.60156,-0.62109 -1.03125,-0.56641zM24.90625,15c-0.03125,0.00781 -0.0625,0.01953 -0.09375,0.03125c-0.0625,0.00391 -0.125,0.01563 -0.1875,0.03125c-0.01172,0.01172 -0.01953,0.01953 -0.03125,0.03125c-5.30469,0.22656 -9.59375,4.54688 -9.59375,9.90625c0,5.50391 4.49609,10 10,10c5.50391,0 10,-4.49609 10,-10c0,-5.33984 -4.25391,-9.64453 -9.53125,-9.90625c-0.03516,0 -0.05859,-0.03125 -0.09375,-0.03125c-0.10156,-0.03906 -0.20703,-0.05859 -0.3125,-0.0625c-0.01953,0 -0.04297,0 -0.0625,0c-0.03125,0 -0.0625,0 -0.09375,0zM24.9375,17c0.01953,0 0.04297,0 0.0625,0c0.03125,0 0.0625,0 0.09375,0c4.375,0.05078 7.90625,3.61328 7.90625,8c0,4.42188 -3.57812,8 -8,8c-4.41797,0 -8,-3.57812 -8,-8c0,-4.39844 3.54688,-7.96484 7.9375,-8zM4.71875,24c-0.55078,0.07813 -0.9375,0.58984 -0.85937,1.14063c0.07813,0.55078 0.58984,0.9375 1.14063,0.85938h6c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-6c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0zM38.71875,24c-0.55078,0.07813 -0.9375,0.58984 -0.85937,1.14063c0.07813,0.55078 0.58984,0.9375 1.14063,0.85938h6c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-6c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0zM15,33.875c-0.22656,0.03125 -0.4375,0.14453 -0.59375,0.3125l-4.25,4.25c-0.29687,0.24219 -0.43359,0.62891 -0.34766,1.00391c0.08594,0.37109 0.37891,0.66406 0.75,0.75c0.375,0.08594 0.76172,-0.05078 1.00391,-0.34766l4.25,-4.25c0.29688,-0.28516 0.38672,-0.72656 0.22656,-1.10547c-0.15625,-0.37891 -0.53516,-0.62109 -0.94531,-0.61328c-0.03125,0 -0.0625,0 -0.09375,0zM34.6875,33.875c-0.375,0.06641 -0.67578,0.33984 -0.78125,0.70313c-0.10547,0.36719 0.00391,0.75781 0.28125,1.01563l4.25,4.25c0.24219,0.29688 0.62891,0.43359 1.00391,0.34766c0.37109,-0.08594 0.66406,-0.37891 0.75,-0.75c0.08594,-0.375 -0.05078,-0.76172 -0.34766,-1.00391l-4.25,-4.25c-0.1875,-0.19922 -0.44531,-0.30859 -0.71875,-0.3125c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0zM24.90625,37.96875c-0.04297,0.00781 -0.08594,0.01953 -0.125,0.03125c-0.46484,0.10547 -0.79297,0.52344 -0.78125,1v6c-0.00391,0.35938 0.18359,0.69531 0.49609,0.87891c0.3125,0.17969 0.69531,0.17969 1.00781,0c0.3125,-0.18359 0.5,-0.51953 0.49609,-0.87891v-6c0.01172,-0.28906 -0.10547,-0.56641 -0.3125,-0.76172c-0.21094,-0.19922 -0.49609,-0.29687 -0.78125,-0.26953z"></path></g></g>
        </svg>
        <svg id="icon-dark" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <rect x="0" y="0" width="24" height="24"/>
          <path d="M12.0700837,4.0003006 C11.3895108,5.17692613 11,6.54297551 11,8 C11,12.3948932 14.5439081,15.9620623 18.9299163,15.9996994 C17.5467214,18.3910707 14.9612535,20 12,20 C7.581722,20 4,16.418278 4,12 C4,7.581722 7.581722,4 12,4 C12.0233848,4 12.0467462,4.00010034 12.0700837,4.0003006 Z" stroke="black"/>
        </g>
        </svg>	
      </a>
      </li>	
    
    
    <li class="nav-item dropdown notification_dropdown flex justify-center relative">
                      <a class="nav-link relative p-[0.8375rem] text-[#464a53] text-lg leading-[1] block duration-500 bell-link" href="javascript:void(0);">
      <svg width="20" height="22" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.9026 6.85114L12.4593 10.4642C11.6198 11.1302 10.4387 11.1302 9.59922 10.4642L5.11844 6.85114" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9089 19C18.9502 19.0084 21 16.5095 21 13.4384V6.57001C21 3.49883 18.9502 1 15.9089 1H6.09114C3.04979 1 1 3.49883 1 6.57001V13.4384C1 16.5095 3.04979 19.0084 6.09114 19H15.9089Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

                      </a>
    </li>	
    <li class="nav-item dropdown notification_dropdown flex justify-center relative">
        <a class="nav-link relative p-[0.8375rem] text-[#464a53] text-lg leading-[1] block duration-500 bell dz-fullscreen"  href="javascript:void(0);">
         <svg id="icon-full" viewBox="0 0 24 24" width="20" height="20" stroke="black" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" style="stroke-dasharray: 37, 57; stroke-dashoffset: 0;"></path></svg>
         <svg id="icon-minimize" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minimize"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" style="stroke-dasharray: 37, 57; stroke-dashoffset: 0;"></path></svg>
        </a>
    </li>	
    <li class="nav-item pl-4 flex justify-center relative">
      <div class="dropdown header-profile2">
        <a data-dz-dropdown="DzinfoDropdown" class="dz-dropdown nav-link relative p-2 text-[#464a53] text-lg leading-[1] block duration-500" href="javascript:void(0);" role="button" data-bs-toggle="dropdown">
          <div class="header-info2 flex items-center">
            <div class="header-media mr-[7px] h-[1.875rem] w-[1.875rem]">
              <img src="/assets/images/tab/1.jpg" alt="" class="w-full rounded-full">
            </div>
            <div class="header-info text-black max-sm:hidden">
              {#if user}
              <h6 class="lg:text-[13px] text-xs mb-1 font-semibold text-black leading-[1]">
                
              {user.role}
               
              </h6>
              <p class="text-xs leading-[1] text-black mb-1">{user.email}</p> {/if}
            </div>
          </div>
        </a>
        <div id="DzinfoDropdown" class="dz-dropdown-menu dropdown-menu dropdown-menu-end bg-white dark:bg-[#242424] absolute rounded-es-md rounded-ee-md w-[275px] right-0 top-full z-[9] shadow-[0_0_3.125rem_0_rgba(82,63,105,0.15)] py-2 hidden">
          <div class="card border-0 mb-0">
            <div class="card-header relative flex items-center justify-between bg-transparent py-2 sm:px-[1.25rem] px-4 border-b border-[#E6E6E6] dark:border-[#444444]">
              <div class="flex items-center">
                <img src="/assets/images/tab/1.jpg" class="avatar avatar-md mr-2.5 h-[2.813rem] w-[2.813rem] inline-block object-cover rounded-md" alt="">
                <div>
                  <h6 class="text-sm"><span class="font-extrabold text-2xl first-letter:text-sky-500 tracking-wider">Le<span class="text-sky-500">.</span>Bedoo</span> </h6>
                  <span class="text-xs text-body-color"><!-- Web Designer --></span>	
                </div>	
              </div>
            </div>
            <div class="card-body sm:py-2  border-[#E6E6E6] dark:border-[#444444]">
       
            </div>
            <div class="card-footer px-0 py-2">
          
                <a on:click={handleLogout} href="javascript:void(0);" class="dropdown-item py-[0.6rem] px-[1.25rem] text-base block w-full ai-icon">
                <svg class="profle-logout inline-block" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff7979" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                <span class="ml-2 text-danger text-[13px]">Se déconnecter </span>
              </a>
            <!--   {/if} -->
              
            </div>
          </div>
          
        </div>
      </div>
    </li>
              </ul>
          </div>
</nav>
</div>
</div>
<!-- Header end -->

