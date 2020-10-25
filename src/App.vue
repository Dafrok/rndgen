<template>
  <form class="section" @submit.prevent="generate">
    <div class="container">
      <h1 class="title has-text-centered">可控平均值随机数集生成器</h1>
      <div class="panel is-link">
        <p class="panel-heading">生成参数</p>
        <div class="panel-block">
          <div class="container">
            <div class="columns">
              <div class="column">
                <div class="field">
                  <label class="label">最大值</label>
                  <div class="control">
                    <input
                      class="input"
                      v-model.number="inputMax"
                      type="number"
                    />
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="field">
                  <label class="label">最小值</label>
                  <div class="control">
                    <input
                      class="input"
                      v-model.number="inputMin"
                      type="number"
                    />
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="field">
                  <label class="label">平均值</label>
                  <div class="control">
                    <input
                      class="input"
                      v-model.number="average"
                      type="number"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <div class="field">
                  <label class="label">平均值偏差</label>
                  <div class="control">
                    <input
                      class="input"
                      v-model.number="offset"
                      type="number"
                    />
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="field">
                  <label class="label">生成数量</label>
                  <div class="control">
                    <input
                      class="input"
                      v-model.number="amount"
                      type="number"
                    />
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="field">
                  <label class="label"> 离散度 </label>
                  <div class="control">
                    <input
                      class="input"
                      :class="
                        contraction >= 100 || contraction <= 0
                          ? 'is-danger'
                          : ''
                      "
                      type="number"
                      max="100"
                      min="0"
                      v-model.number="contraction"
                    />
                  </div>
                  <p class="help">定义域 (0, 100)，离散度越高计算越快</p>
                </div>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <button class="button is-link is-outlined is-fullwidth" :disabled="generating">
                  生成{{generating ? '中...' : ''}}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
  <section class="section">
    <div class="container">
      <div class="panel is-link">
        <p class="panel-heading">生成结果</p>
        <div class="panel-block">
          <div class="container">
            <div class="columns">
              <div class="column">
                <label class="label">平均值</label> {{ resultAverage }}
              </div>
              <div class="column">
                <label class="label">最大值</label> {{ resultMax }}
              </div>
              <div class="column">
                <label class="label">最小值</label> {{ resultMin }}
              </div>
            </div>
          </div>
        </div>
        <div class="panel-block">
          <div class="container">
          <textarea class="textarea" readonly v-model="resultStr"></textarea>
          </div>
        </div>
        <div class="panel-block">
          <div class="container">
          <nav class="pagination is-rounded is-fullwidth is-small" role="navigation" aria-label="pagination">
            <a class="pagination-previous" @click="toPrevPage">上一页</a>
            <a class="pagination-next" @click="toNextPage">下一页</a>
            <ul class="pagination-list">
              <li v-if="page > 0"><a class="pagination-link" @click="toPage(0)">1</a></li>
              <li v-if="page > 2"><span class="pagination-ellipsis">&hellip;</span></li>
              <li v-if="page > 1"><a class="pagination-link" @click="toPage(page - 1)">{{page}}</a></li>
              <li><a class="pagination-link is-current" aria-current="page">{{page + 1}}</a></li>
              <li v-if="page < result.length / 250 - 2"><a class="pagination-link" @click="toPage(page + 1)">{{page + 2}}</a></li>
              <li v-if="page < result.length / 250 - 3"><span class="pagination-ellipsis">&hellip;</span></li>
              <li v-if="page < result.length / 250 - 1"><a class="pagination-link" @click="toPage(result.length / 250 - 1)">{{result.length / 250}}</a></li>
            </ul>
          </nav>
          </div>
        </div>
        <div class="panel-block">
          <chart :data="result" :max="max" :min="min" />
        </div>
        <div class="panel-block">
          <button
            :disabled="!result.length"
            class="button is-link is-outlined is-fullwidth"
            @click="clip"
          >
            {{ copySuccess ? "复制成功！" : "复制到剪贴板" }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import clipIt from 'clip-it'
import Chart from './Chart.vue'
import {generate} from './worker';

export default {
  name: 'App',
  data() {
    return {
      max: 0,
      min: 0,
      inputMax: 100,
      inputMin: 50,
      average: 65,
      offset: 10,
      amount: 500,
      contraction: 75,
      result: [],
      copySuccess: false,
      generating: false,
      page: 0
    }
  },
  components: {
    chart: Chart,
  },
  computed: {
    resultAverage() {
      const ary = this.result
      return ary.length
        ? ary.reduce((num, item) => num + item, 0) / ary.length
        : 0
    },
    resultMax() {
      const ary = this.result
      return ary.length ? ary.reduce((a, b) => Math.max(a, b)) : 0
    },
    resultMin() {
      const ary = this.result
      return ary.length ? ary.reduce((a, b) => Math.min(a, b)) : 0
    },
    resultStr() {
      const {page} = this
      return this.result.slice(page * 250, (page + 1) * 250).join(',')
    },
  },
  methods: {
    clip() {
      const flag = clipIt(this.result)
      if (flag) {
        this.copySuccess = true
        setTimeout(() => {
          this.copySuccess = false
        }, 2e3)
      }
    },
    toNextPage() {
      if (this.page < (this.result.length / 250 - 1)) {
        this.page++
      }
    },
    toPrevPage() {
      if (this.page > 0) {
        this.page--
      }
    },
    toPage(n) {
      this.page = n
    },
    async generate() {
      this.page = 0
      this.generating = true
      this.result = []
      const { inputMax, inputMin, average, offset, amount, contraction } = this
      this.max = inputMax
      this.min = inputMin
      const { max, min } = this
      // const ary = initData({ max, min, average, amount })
      // const [minOffset, maxOffset] = getOffsetRange({
      //   max,
      //   min,
      //   average,
      //   offset,
      // })
      // const result = generateData(ary, {
      //   minOffset,
      //   maxOffset,
      //   offset,
      //   amount,
      //   contraction,
      // })
      const result = await generate({
        max,
        min,
        average,
        offset,
        amount,
        contraction,
      })
      this.result = result.map((offset) => parseInt(average + offset, 10))
      this.generating = false
    },
  },
}
</script>
