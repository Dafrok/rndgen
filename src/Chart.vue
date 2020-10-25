<script>
import {h} from 'vue';
import echarts from 'echarts';
export default {
  render() {
    return h('div');
  },
  props: ['data', 'max', 'min'],
  methods: {
    renderChart() {
      if (!this.chart) {
        this.$el.style.height = '300px';
        this.$el.style.width = '100%';
        this.chart = echarts.init(this.$el);
      }
      const xAxisData = [];
      for (let i = this.min; i < this.max; i++) {
        xAxisData.push(i);
      }
      const xAxisMap = xAxisData.reduce((result, num) => {
        result[num] = 0;
        return result;
      }, {});
      const seriesData = Object.entries(
        this.data.reduce((result, num) => {
          result[num]++;
          return result;
        }, xAxisMap)
      )
        .sort((a, b) => a[0] - b[0])
        .map((item) => item[1]);
      this.chart.setOption({
        title: {
          text: '数值分布',
        },
        tooltip: {},
        xAxis: {
          data: xAxisData,
        },
        yAxis: {},
        series: [
          {
            name: '累计',
            type: 'bar',
            data: seriesData,
          },
        ],
      });
    },
  },
  mounted() {
    window.onresize = () => {
      this.chart && this.chart.resize();
    };
  },
  updated() {
    this.renderChart();
  },
};
</script>
