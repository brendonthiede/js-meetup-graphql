import Vue from 'vue'
import PeopleList from '@/components/PeopleList'

function getRenderedComponent (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData }).$mount()
  return vm.$el
}

describe('PeopleList.vue', () => {
  it('renders correct number of bios', () => {
    var bio = getRenderedComponent(PeopleList, {
      'people': [{
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
      },
      {
        'id': 2,
        'name': 'Darth Brendon',
        'birth_year': '1978',
        'gender': 'male',
        'homeworld': {
          'name': 'Earth'
        },
        'species': {
          'name': 'Human'
        }
      }]
    })
    expect(bio.querySelectorAll('.people-list .bio').length).toEqual(2)
  })
})
