import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('books').del();

  // Inserts seed entries
  await knex('books').insert([
    // Since we used 'increments', do not pass id field, DB will sort it out itself
    {
      authors: JSON.stringify(['Jonathan Haidt']),
      title: 'Coddling of the American Mind',
    },
    {
      authors: JSON.stringify(['Dan Heath', 'Chip Heath']),
      title: 'Switch: How to change when change is hard',
    },
    {
      authors: JSON.stringify(['Kathy Sierra']),
      title: 'Badass: Making users awesome',
    },
    {
      authors: JSON.stringify(['Daniel Kahneman']),
      title: 'Thinking fast, thinking slow',
    },
    { authors: JSON.stringify(['Caroline Dweck']), title: 'Mindset' },
    {
      authors: JSON.stringify(['Michael Walker']),
      title: 'Why we sleep?',
    },
  ]);
}
