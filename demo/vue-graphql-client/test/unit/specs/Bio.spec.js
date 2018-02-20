import Vue from 'vue'
import Bio from '@/components/Bio'

function getRenderedComponent (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData }).$mount()
  return vm.$el
}

describe('Bio.vue', () => {
  it('renders correctly with basic props', () => {
    var bio = getRenderedComponent(Bio, {
      'person': {
        'id': 1,
        'name': 'Luke Thiede',
        'birth_year': '2018',
        'gender': 'male',
        'homeworld': {
          'name': 'Earth'
        },
        'species': {
          'name': 'Human'
        }
      }
    })
    expect(bio.querySelector('.bio h3').textContent).toEqual('Luke Thiede')
    expect(bio.querySelector('.bio .description').textContent.trim()).toEqual('Male Human born in 2018 on Earth')
  })
  it('renders correctly for droids', () => {
    var bio = getRenderedComponent(Bio, {
      'person': {
        'id': 1,
        'name': 'C-3P0',
        'birth_year': '112BBY',
        'gender': 'n/a',
        'homeworld': {
          'name': 'Tatooine'
        },
        'species': {
          'name': 'Droid'
        }
      }
    })
    expect(bio.querySelector('.bio h3').textContent).toEqual('C-3P0')
    expect(bio.querySelector('.bio .description').textContent.trim()).toEqual('Droid created in 112BBY on Tatooine')
  })
})
