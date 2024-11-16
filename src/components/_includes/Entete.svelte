	<script>
        export let libelle;
        export let lien;
        export let descr;
    </script>
    <!-- row -->	
	<div class="page-titles dark:bg-[#242424] flex items-center justify-between relative border-t-2   border-[#5f9fd6] dark:border-[#444444] flex-wrap z-[1] py-[0.6rem] sm:px-[1.95rem] px-[1.55rem] bg-white  shadow-lg shadow-gray-200">
		<ol class="text-[13px] flex items-center flex-wrap bg-transparent">
			<li><h5 class="sm:text-[17px] text-[15px] mr-8">Dashboard</h5></li>
			<li><a href="{lien}" class="text-[#828690] dark:text-white text-[13px]">
				<svg class="mb-[3px] mr-1 inline-block" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M2.125 6.375L8.5 1.41667L14.875 6.375V14.1667C14.875 14.5424 14.7257 14.9027 14.4601 15.1684C14.1944 15.4341 13.8341 15.5833 13.4583 15.5833H3.54167C3.16594 15.5833 2.80561 15.4341 2.53993 15.1684C2.27426 14.9027 2.125 14.5424 2.125 14.1667V6.375Z" stroke="#2C2C2C" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M6.375 15.5833V8.5H10.625V15.5833" stroke="#2C2C2C" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
				{libelle} </a>
			</li>
			<li class="pl-2 { descr !="" ?  "before:content-['/']" : '' } before:font-[simple-line-icons] before:font-black before:text-xl before:leading-4 before:pr-2 before:float-left before:text-primary text-primary font-medium"><a href="{lien}">{descr}</a></li>
		</ol>
		<a class="text-primary dark:text-white text-[0.8125rem] leading-[1.5] offcanvas-toggle" href="#offcanvasExample1" data-dz-offcanvas="offcanvasExample1"><!-- + Add Task --></a>
	</div>