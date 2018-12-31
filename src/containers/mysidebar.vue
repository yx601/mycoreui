<template>
  <nav class="sidebar-nav">
    <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-y="scrollHandle">
      <ul class="nav">
        <template v-for="(item, index) in navItems">
          <template v-if="item.title">
            <SidebarNavTitle :key="index" :name="item.name" :classes="item.class" :wrapper="item.wrapper"/>
          </template>
          <template v-else-if="item.divider">
            <SidebarNavDivider :key="index" :classes="item.class"/>
          </template>
          <template v-else-if="item.label">
            <SidebarNavLabel :key="index" :name="item.name" :url="item.url" :icon="item.icon" :label="item.label" :classes="item.class"/>
          </template>
          <template v-else>
            <template v-if="item.children">
              <!-- First level dropdown -->
              <SidebarNavDropdown  :key="index" :name="item.name" :url="item.url" :icon="item.icon">
                <template v-for="(childL1, index1) in item.children">
                  <template v-if="childL1.children">
                    <!-- Second level dropdown -->
                    <SidebarNavDropdown class="ml-2" :key="index1" :name="childL1.name" :url="childL1.url" :icon="childL1.icon">
                      <template v-for="(childL2, index2) in childL1.children">
                        <template v-if="childL2.children">
                          <!-- Third Level dropdown -->
                          <SidebarNavDropdown class="ml-2"  :key="index2" :name="childL2.name" :url="childL2.url" :icon="childL2.icon">
                            <template v-for="(childL3,index3) in childL2.children">
                              <template v-if="childL3.children">
                                <!-- Fourth Level dropdown -->
                                <SidebarNavDropdown class="ml-2" :key="index3" :name="childL3.name" :url="childL3.url" :icon="childL3.icon">
                                  <template v-for="(childL4,index4) in childL3.children">
                                    <li :key="index4" :classes="item.class" class="ml-2">
                                      <SidebarNavLink :name="childL4.name" :url="childL4.url" :icon="childL4.icon" :badge="childL4.badge" :variant="childL4.variant" :attributes="childL4.attributes" />
                                    </li>
                                  </template>
                                </SidebarNavDropdown>
                              </template>
                              <template v-else>
                                <li :key="index3" :classes="item.class" class="ml-2">
                                  <SidebarNavLink  :name="childL3.name" :url="childL3.url" :icon="childL3.icon" :badge="childL3.badge" :variant="childL3.variant" :attributes="childL3.attributes" />
                                </li>
                              </template>
                            </template>
                          </SidebarNavDropdown>

                        </template>
                        <template v-else>
                          <li :key="index2" :classes="item.class" class="ml-2">
                            <SidebarNavLink  :name="childL2.name" :url="childL2.url" :icon="childL2.icon" :badge="childL2.badge" :variant="childL2.variant" :attributes="childL2.attributes" />
                          </li>
                        </template>
                      </template>
                    </SidebarNavDropdown>
                  </template>
                  <template v-else>
                    <SidebarNavItem :key="index1" :classes="item.class" class="ml-2">
                      <SidebarNavLink :name="childL1.name" :url="childL1.url" :icon="childL1.icon" :badge="childL1.badge" :variant="childL1.variant" :attributes="childL1.attributes"/>
                    </SidebarNavItem>
                  </template>
                </template>
              </SidebarNavDropdown>
            </template>
            <template v-else>
              <SidebarNavItem :key="index" :classes="item.class">
                <SidebarNavLink :name="item.name" :url="item.url" :icon="item.icon" :badge="item.badge" :variant="item.variant" :attributes="item.attributes"/>
              </SidebarNavItem>
            </template>
          </template>
        </template>
      </ul>
      <slot></slot>
    </VuePerfectScrollbar>
  </nav>
</template>

<script>
  import SidebarNavDivider from '@coreui/vue/src/components/Sidebar/SidebarNavDivider'
  import SidebarNavDropdown from '@coreui/vue/src/components/Sidebar/SidebarNavDropdown'
  import SidebarNavLink from '@coreui/vue/src/components/Sidebar/SidebarNavLink'
  import SidebarNavTitle from '@coreui/vue/src/components/Sidebar/SidebarNavTitle'
  import SidebarNavItem from '@coreui/vue/src/components/Sidebar/SidebarNavItem'
  import SidebarNavLabel from '@coreui/vue/src/components/Sidebar/SidebarNavLabel'
  import VuePerfectScrollbar from 'vue-perfect-scrollbar'

  export default {
    name: 'SidebarNav',
    components: {
      SidebarNavDivider,
      SidebarNavDropdown,
      SidebarNavLink,
      SidebarNavTitle,
      SidebarNavItem,
      SidebarNavLabel,
      VuePerfectScrollbar
    },
    props: {
      navItems: {
        type: Array,
        required: true,
        default: () => []
      }
    },
    data () {
      return {}
    },
    computed: {
      psSettings: () => {
        // ToDo: find better rtl fix
        return {
          maxScrollbarLength: 200,
          minScrollbarLength: 40,
          suppressScrollX: getComputedStyle(document.querySelector('html')).direction !== 'rtl',
          wheelPropagation: false,
          interceptRailY: styles => ({ ...styles, height: 0 })
        }
      }
    },
    methods: {
      scrollHandle (evt) {
        // console.log(evt)
      }
    }
  }
</script>

<style scoped lang="css">
  .scroll-area {
    position: absolute;
    height: 100%;
    margin: auto;
  }
  .sidebar .nav-dropdown.open > .nav-dropdown-items {
    overflow-x: hidden;
  }
</style>
