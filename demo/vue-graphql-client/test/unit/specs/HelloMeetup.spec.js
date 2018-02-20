import Vue from 'vue'
import HelloMeetup from '@/components/HelloMeetup'

describe('HelloMeetup.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloMeetup)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('This way to the demo:')
  })
})
