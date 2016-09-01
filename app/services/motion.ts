import { Injectable } from '@angular/core'
import { DeviceMotion } from 'ionic-native'
import { AccelerationData } from 'ionic-native/dist/plugins/devicemotion.d'
import { Observable } from 'rxjs/Rx'
import { Subscription } from 'rxjs/Subscription'
import { Direction } from './motionDirection'
import { Constants } from '../appConstants'

@Injectable()
class Motion {
	private acceleration : Observable<AccelerationData>
	private subscription : Subscription
	private lastCheckPosition : AccelerationData
	private initialization : Promise<any>
	public direction : Observable<Direction>

	constructor () {
		this.acceleration = DeviceMotion.watchAcceleration()
		DeviceMotion.getCurrentAcceleration().then(
			(acceleration: AccelerationData) => {
				this.lastCheckPosition = acceleration
			},
			(error: any) => {
				console.log(error)
				this.lastCheckPosition = { x: 0, y: 0, z: 0, timestamp: Date.now() }
			}
		);
	}

	watch () {
		this.subscription = this.acceleration.subscribe((data: AccelerationData) => {
			if (data.timestamp - this.lastCheckPosition.timestamp < Constants.MAX_TIME_ACTION) {
				
			}
		})
	}

	unwatch () {
		if (this.subscription) {
			this.subscription.unsubscribe()
		}
	}
}

export default Motion