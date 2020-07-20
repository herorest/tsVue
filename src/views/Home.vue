<script lang='ts'>
import {CreateElement, VNode} from 'vue';
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { State, Action, Mutation, namespace } from 'vuex-class';
import testCascade from '../components/testCascade.vue';

const mainStore = namespace('mainStore');

@Component({
  name: 'home',
  components: {
    testCascade: testCascade
  }
})

export default class ReportDesign extends Vue {
  @mainStore.State('title') title!: string;

  prefixCls: string = 'home';
  previewStatus: boolean = false; // 预览状态
  loading: boolean = true;
  value: Array<any> = [];

  @Watch('value')
  watchTitle(val: string) {
    this.setTitle(val);
  }
 
  /**
   * 修改标题
   */
  updateTitle(title: string) {
    this.setTitle(title);
  }

  setTitle(title: string){
    console.log('setTitle');
  }

  async created() {
  }

  setValue(val: Array<any>){
    this.value = val;
  }

  render(h: CreateElement) {
    const options = [
      {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
          {
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [
              {
                value: 'xihu',
                label: 'West Lake',
              },
            ],
          },
        ],
      }
    ];
    const children = [
      h('HelloWorld', {
        props: {
          title: this.title,
          subTitle: '123',
          msg: '123456'
        }
      }),
      h('testCascade', {
        props: {
          title: '1221212',
          value: this.value,
          options
        },
        on: {
          change: this.setValue
        }
      })
    ];
    
    return h('div', {
      class: {
        'home': true,
        'layout': true,
      }
    }, children);
  }
}
</script>
<style lang="less">
body{
  font-size:13px;
}
</style>
