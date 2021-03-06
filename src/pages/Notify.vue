<template>
  <layouts-default>
    <div class="uk-block">
      <h2>Notify</h2>
      <hr class="uk-article-divider">
      <!-- DEMO -->
      <button class="uk-button" @click="messages.push({
        message: 'Message...',
        timeout: messageProps.timeout.demo.value,
        status: messageProps.status.demo.value,
        transition: messageProps.transition.demo.value
      })">
        Notify
      </button>
      <vk-notify
        :placement="props.placement.demo.value"
        @timeout="
          messages.splice(messages.indexOf(arguments[0]), 1)
          events.timeout.emited = true
        "
        @click="
          messages.splice(messages.indexOf(arguments[0]), 1)
          events.click.emited = true
        ">
        <vk-notify-message v-for="message in messages"
          :id="message"
          :status="message.status"
          :timeout="message.timeout"
          :transition="message.transition">
          <a href="#" class="uk-close" @click.prevent="
            messages.splice(messages.indexOf(arguments[0]), 1)
          "></a>
          {{ message.message }}
        </vk-notify-message>
      </vk-notify>
      <!-- DESC -->
      <div class="uk-margin-large">
        The <code>vk-notify</code> component creates toggleable notifications
        that fade out automatically.
      </div>
      <!-- TABS -->
      <vk-tabs
        :index="tabsIndex"
        @change="tabsIndex = arguments[0]">
        <vk-tabs-item name="Props">
          <h4>vk-notify</h4>
          <vk-docs-props
            :props="props"
            @change="props[arguments[0]].demo.value = arguments[1]">
          </vk-docs-props>
          <h4>vk-notify-message</h4>
          <vk-docs-props
            :props="messageProps"
            @change="messageProps[arguments[0]].demo.value = arguments[1]">
          </vk-docs-props>
        </vk-tabs-item>
        <vk-tabs-item name="Slots">
          <h4>vk-notify</h4>
          <vk-docs-slots :slots="slots"></vk-docs-slots>
          <h4>vk-notify-message</h4>
          <vk-docs-slots :slots="messageSlots"></vk-docs-slots>
        </vk-tabs-item>
        <vk-tabs-item name="Events">
          <h4>vk-notify</h4>
          <vk-docs-events :events="events"></vk-docs-events>
        </vk-tabs-item>
        <vk-tabs-item name="Example">
          <vk-docs-code>{{ code }}</vk-docs-code>
        </vk-tabs-item>
      </vk-tabs>
    </div>
  </layouts-default>
</template>

<script>
import Component from '../lib/Notify'
import NotifyMessage from '../lib/NotifyMessage'
import mixin from './_mixin'
import { mergeProps } from '../helpers/pages'

export default {
  name: 'PageNotify',
  mixins: [mixin],
  data: () => ({
    tabsIndex: 0,
    props: mergeProps(Component.props, props),
    messageProps: mergeProps(NotifyMessage.props, messageProps),
    slots,
    messageSlots,
    events,
    example,
    messages: []
  })
}

const props = {
  placement: {
    description: 'Specifies the placement point of the notification.',
    demo: {
      type: 'Select',
      options: [
        { text: 'top-center', value: 'top-center' },
        { text: 'top-left', value: 'top-left' },
        { text: 'top-right', value: 'top-right' },
        { text: 'bottom-center', value: 'bottom-center' },
        { text: 'bottom-left', value: 'bottom-left' },
        { text: 'bottom-right', value: 'bottom-right' }
      ],
      value: 'top-center'
    }
  }
}

const messageProps = {
  id: {
    description: `A unique identifier for the message. The message object it self
      can be used as the id.`
  },
  status: {
    description: `Specifies the notification style to indicate an <code>info</code>,
      <code>success</code>, <code>warning</code> or a <code>danger</code> status.`,
    demo: {
      type: 'Select',
      options: [
        { text: 'default', value: '' },
        { text: 'info', value: 'info' },
        { text: 'success', value: 'success' },
        { text: 'warning', value: 'warning' },
        { text: 'danger', value: 'danger' }
      ],
      value: ''
    }
  },
  timeout: {
    description: `Defines what amount of time in milliseconds a message is visible.
      You can also create a sticky message by setting the timeout to zero.`,
    demo: {
      type: 'Select',
      options: [
        { text: 0, value: 0 },
        { text: 1000, value: 1000 },
        { text: 5000, value: 5000 }
      ],
      value: 5000
    }
  },
  transition: {
    description: `Specifies the transition name to be used by the transition
      wrapper component.`,
    demo: {
      type: 'Select',
      options: [
        { text: 'Default', value: '' },
        { text: 'Fade', value: 'vk-transition-fade' },
        { text: 'Bounce', value: 'vk-transition-bounce' }
      ],
      value: ''
    }
  }
}

const slots = {
  default: {
    description: 'The container for the <code>vk-notify-message</code> components.'
  }
}

const messageSlots = {
  default: {
    description: 'The message content.'
  }
}

const events = {
  click: {
    description: 'Emited by <code>vk-notify</code> when the notification is clicked.',
    emited: false
  },
  timeout: {
    description: 'Emited by <code>vk-notify</code> when the notification visible time run out.',
    emited: false
  }
}

const example =
`<button class="uk-button" @click="messages.push({
  message: 'Message...',
  timeout: 5000,
  status: 'info'
})">
  Notify
</button>
<vk-notify {attrs}
  @timeout="messages.splice(messages.indexOf(arguments[0]), 1)"
  @click="messages.splice(messages.indexOf(arguments[0]), 1)">
  <vk-notify-message v-for="message in messages"
    :id="message"
    :status="message.status"
    :timeout="message.timeout">
    <a href="#" class="uk-close" @click.prevent="
      messages.splice(messages.indexOf(arguments[0]), 1)
    "></a>
    {{ message.message }}
  </vk-notify-message>
</vk-notify>`
</script>
