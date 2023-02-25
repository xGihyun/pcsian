<div class="dot-flashing scale-90" />

<style>
	.dot-flashing {
    --color: rgb(200, 200, 200);

		position: relative;
		width: 10px;
		height: 10px;
		border-radius: 5px;
		background-color: var(--color);
		animation: dot-flashing 1s infinite linear alternate;
		animation-delay: 0.5s;
	}
	.dot-flashing::before,
	.dot-flashing::after {
		content: '';
		display: inline-block;
		position: absolute;
		top: 0;
	}
	.dot-flashing::before {
		left: -15px;
		width: 10px;
		height: 10px;
		border-radius: 5px;
		background-color: var(--color);
		animation: dot-flashing 1s infinite alternate;
		animation-delay: 0s;
	}
	.dot-flashing::after {
		left: 15px;
		width: 10px;
		height: 10px;
		border-radius: 5px;
		background-color: var(--color);
		animation: dot-flashing 1s infinite alternate;
		animation-delay: 1s;
	}

	@keyframes dot-flashing {
		0% {
			background-color: var(--color);
		}
		50%,
		100% {
			background-color: rgba(200, 200, 200, 0.2);
		}
	}
</style>
