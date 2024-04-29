<template>
	<div class="popup">
		<div class="popup-inner">
			<slot />
			<button class="popup-close" @click="TogglePopup()">
				Close
			</button>
		</div>
	</div>
</template>

<script>

export default {
    props:['TogglePopup'],
    name: 'Pop_up'
}
</script>

<style scoped>
/* .popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(175, 158, 158, 0.2);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;

    .popup-inner {
        position: relative;
        background: #FFF;
        padding: 32px;

    }
 } */

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.popup-close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  border: none;
  background: none;
  font-size: 16px;
  color: #333;
}   




</style>