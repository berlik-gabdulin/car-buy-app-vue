function car(name, model, owner, year, phone, image) {
	return {
		name, model, owner, year, phone, image
	}
}

const log = (text, type, date = new Date()) => ({text, type, date});

const cars = [
	car('Ford', 'Focus', 'Max', 2016, '+7 921 123 13 12', 'img/ford-focus.jpg'),
	car('Porsche', 'Panamera', 'Vladimir', 2015, '+7 213 987 43 65', 'img/porsche-panamera.jpg'),
	car('Ford', 'Mondeo', 'Irina', 2018, '+7 9123 981 67 76', 'img/ford-mondeo.jpg')
]

console.log(cars);

new Vue({
	el: '#app',
	data: {
		cars: cars,
		car: cars[0],
		logs: [],
		selectedCarIndex: 0,
		phoneVisibilty: false,
		search: '',
		modalVisibility: 'true'
	},
	methods: {
		selectCar (index) {
			// console.log("index", index);
			this.car = cars[index];
			this.selectedCarIndex = index;
		},
		newOrder () {
			this.modalVisibility = false;
			this.logs.push(
				log(`Success order: ${this.car.name} - ${this.car.model}`, 'ok')
			)
		},
		cancelOrder () {
			this.modalVisibility = false;
			this.logs.push(
				log(`Canceled order: ${this.car.name} - ${this.car.model}`, 'cnl')
			)
		}
	},
	filters: {
		date(value) {
			return value.toLocaleString()
		}
	},
	computed: {
		phoneBtnText() {
			return this.phoneVisibilty ? 'Hide phone' : 'Show phone';
		},
		filteredCars() {
			return this.cars.filter(car => {
				return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
			})
		}
	}
})