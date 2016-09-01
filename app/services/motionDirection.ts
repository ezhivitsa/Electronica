import { AccelerationData } from 'ionic-native/dist/plugins/devicemotion.d'

interface Direction {
	start: AccelerationData
	end: AccelerationData
	direction: String
}

export { Direction }