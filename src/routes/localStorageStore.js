import { persistedWritable } from '$lib/utilities/persistedWritable'

export let name = persistedWritable('name', 'custom persistedWritable felix')
