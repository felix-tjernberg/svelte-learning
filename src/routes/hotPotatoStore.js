// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { writable } from 'svelte/store'

function generateRandomTimeBetween8And16() {
	return Math.floor(Math.random() * 8) + 8
}

function pickRandomlyFromArray(array) {
	return array[Math.floor(Math.random() * array.length)]
}

function filterArrayFromElement(array, element) {
	return array.filter((item) => item !== element)
}
function INITIAL_OBJECT_STATE() {
	return {
		playerHoldingThePotato: undefined,
		playerList: [],
		playersNotHoldingThePotato: [],
		timeToBlow: generateRandomTimeBetween8And16()
	}
}

function createHotPotato() {
	const { set, subscribe, update } = writable(INITIAL_OBJECT_STATE())

	const setPlayers = (playerList) => {
		update((object) => {
			const randomPlayer = pickRandomlyFromArray(playerList)
			const playersNotHoldingThePotato = filterArrayFromElement(playerList, randomPlayer)
			object.playersNotHoldingThePotato = playersNotHoldingThePotato
			object.playerHoldingThePotato = randomPlayer
			object.playerList = playerList
			return object
		})
	}

	const passThePotato = () => {
		update((object) => {
			const randomPlayer = pickRandomlyFromArray(object.playersNotHoldingThePotato)
			const playersNotHoldingThePotato = filterArrayFromElement(
				[...object.playersNotHoldingThePotato, object.playerHoldingThePotato],
				randomPlayer
			)
			object.playersNotHoldingThePotato = playersNotHoldingThePotato
			object.playerHoldingThePotato = randomPlayer
			object.timeToBlow = object.timeToBlow - 1
			return object
		})
	}

	return {
		passThePotato,
		reset: () => set(INITIAL_OBJECT_STATE()),
		setPlayers,
		subscribe
	}
}

export const hotPotatoGame = createHotPotato()
