/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "D:\\My-Note\\my-note\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-bbd15e92",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-bbd15e92").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-353cd0ba",
    path: "/home/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-353cd0ba").then(next)
    },
  },
  {
    path: "/home/index.html",
    redirect: "/home/"
  },
  {
    name: "v-ddf8107a",
    path: "/interview/interviewCss.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-ddf8107a").then(next)
    },
  },
  {
    name: "v-c99e51d2",
    path: "/browser/browser.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-c99e51d2").then(next)
    },
  },
  {
    name: "v-4c02a537",
    path: "/interview/interviewJs.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-4c02a537").then(next)
    },
  },
  {
    name: "v-7698a697",
    path: "/interview/interview.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-7698a697").then(next)
    },
  },
  {
    name: "v-2cc9ea91",
    path: "/javascript/javascript.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-2cc9ea91").then(next)
    },
  },
  {
    path: '*',
    component: GlobalLayout
  }
]