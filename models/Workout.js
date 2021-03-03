const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
	day: {
		type: Date,
		required: 'Date is required'
	},
	exercises: [
		{
			type: {
				type: String,
				trim: true,
				required: 'Type is required.'
			},
			name: {
				type: String,
				trim: true,
				required: 'Name is required.',
			},
			distance: {
				type: Number,
				trim: true
			},
			duration: {
				type: Number,
				trim: true
			},
			weight: {
				type: Number,
				trim: true
			},
			sets: {
				type: Number,
				trim: true
			},
			reps: {
				type: Number,
				trim: true
			}
		}
	]
});

const workout = mongoose.model('Workout', workoutSchema);

module.exports = workout;
