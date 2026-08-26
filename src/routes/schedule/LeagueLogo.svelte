<script>
	const { league } = $props();

	import apslLogo from "@assets/APSL.gif";
	import upslLogo from "@assets/UPSL.gif";
	import casaLogo from "@assets/casa-logo-white.png";
	import dOneLogo from "@assets/d-one-logo-white.png";

	const getLeagueLogo = (league) => {
		switch(league) {
			case 'UPSL':
				return upslLogo;
			case 'APSL':
				return apslLogo;
			case 'CASA':
				return casaLogo;
			case 'D-One':
				return dOneLogo;
			default:
				return null;
		}
	};
</script>

{#if getLeagueLogo(league) }
	<img src="{getLeagueLogo(league)}" alt="{league} logo" height="32"/>
{/if}

<style>
</style>
