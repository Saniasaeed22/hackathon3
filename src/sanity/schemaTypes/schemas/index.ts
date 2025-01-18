import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import cars from './cars'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cars],
}
