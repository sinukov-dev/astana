// Custom select
if (document.querySelector(".custom-select-field")) {
	for (const dropdown of document.querySelectorAll(".custom-select-field")) {
		dropdown.addEventListener("click", function () {
			this.closest("[data-select]").classList.toggle("open")
		})
	}

	for (const option of document.querySelectorAll(".custom-select-options ul > li")) {
		option.addEventListener("click", function () {
			if (!this.classList.contains("selected")) {
				let select = this.closest("[data-select]")
				let selectInput = select.querySelector("input[type=hidden]")
				let selected = this.getAttribute("data-value")
				this.parentNode.querySelector("li.selected").classList.remove("selected")
				this.classList.add("selected")
				select.querySelector(".custom-select-field div").textContent = this.textContent
				select.setAttribute("data-select", selected)
				selectInput.value = selected
				select.classList.remove("open")
			}
		})
	}

	window.addEventListener("click", function (e) {
		for (const select of document.querySelectorAll("[data-select]")) {
			select.classList.remove("error")
			if (!select.contains(e.target)) {
				select.classList.remove("open")
			}
		}
	})

	let close = document.querySelector(".city-select-close")
	close.addEventListener("click", function (e) {
		document.querySelector(".city-select").classList.remove("open")
	})

	let bannerSlider = new Swiper(".banner-slider", {
		slidesPerView: 1,
		spaceBetween: 32,
		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: false
		// },
		pagination: {
			el: ".banner-pagination",
			clickable: true
		},
		navigation: {
			nextEl: ".banner-next",
			prevEl: ".banner-prev"
		}
	})
	const sliders = document.querySelectorAll(".section-slider")
	sliders.forEach((_, i) => {
		i += 1
		let slider = new Swiper(`.section-slider-${i}`, {
			slidesPerView: 1,
			spaceBetween: 16,
			navigation: {
				nextEl: `.section-next-${i}`,
				prevEl: `.section-prev-${i}`
			},
			breakpoints: {
				440: {
					slidesPerView: 2
				},
				899: {
					slidesPerView: 3
				},
				1100: {
					slidesPerView: 4
				}
			}
		})
	})
	document.querySelectorAll(".prod-fav").forEach((el, i) => {
		el.addEventListener("click", function () {
			this.classList.toggle("isFav")
		})
	})

	const inputElement = document.querySelector(".header-search input")

	inputElement.addEventListener("input", function () {
		if (inputElement.value.length > 0) {
			inputElement.classList.add("hasSymbols")
		} else {
			inputElement.classList.remove("hasSymbols")
		}
	})

	document.querySelector(".header-search-reset").addEventListener("click", () => {
		inputElement.value = ""
		inputElement.classList.remove("hasSymbols")
	})

	//header menu mobile

	let menu = document.querySelector(".header-mobile")
	document.querySelector(".header-menu-open").addEventListener("click", () => {
		menu.classList.add("active")
	})
	document.querySelector(".header-mobile-close").addEventListener("click", () => {
		menu.classList.remove("active")
	})
}
