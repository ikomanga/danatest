<template>
  <nav class="app-pagination" v-if="totalSteps">
    <ol class="app-pagination-list">
      <li v-if="currentStep > 1">
        <button @click="previousClick" class="app-pagination-prev">
          <i class="icon-prev"></i>
          <span>Back</span>
        </button>
      </li>
      <li v-if="isShowDotsToFirstPage">
        <button v-if="currentStep !== 1" @click="gotoStep(1)" class="app-pagination-step"><span></span>1</button>
        <span v-else class="app-pagination-step-current">1</span>
      </li>
      <li v-if="isShowDotsToFirstPage && visibleStepRange[0] !== 2"><span class="dots">...</span></li>
      <li v-for="n in visibleStepRange" :key="n" class="app-pagination-list-item">
        <button v-if="n !== currentStep" @click="gotoStep(n)" class="app-pagination-step"><span></span>{{ n }}</button>
        <span v-else class="app-pagination-step-current">{{ n }}</span>
      </li>
      <li v-if="isShowDotsToLastPage && visibleStepRange[visibleStepRange.length - 1] !== totalSteps - 1"><span class="dots">...</span></li>
      <li v-if="isShowDotsToLastPage">
        <button v-if="currentStep !== totalSteps" @click="gotoStep(totalSteps)" class="app-pagination-step"><span></span>{{ totalSteps }}</button>
        <span v-else class="app-pagination-step-current">{{ totalSteps }}</span>
      </li>

      <li v-if="totalSteps && currentStep !== totalSteps">
        <button @click="nextClick" class="app-pagination-next">
          <span>Next</span>
          <i class="icon-next"></i>
        </button>
      </li>
    </ol>

  </nav>
</template>

<script>
export default {
  name: 'AppPagination',
  props: {
    totalSteps: Number,
    initialStep: { type: Number, default: 1 },
    stepsAround: { type: Number, default: 2 }
  },
  data: function () {
    return {
      currentStep: this.initialStep,
      isShowDotsToFirstPage: false,
      isShowDotsToLastPage: false
    }
  },
  methods: {
    nextClick () {
      this.gotoStep(this.currentStep < this.totalSteps ? this.currentStep + 1 : this.totalSteps)
    },
    previousClick () {
      this.gotoStep(this.currentStep > 1 ? this.currentStep - 1 : 1)
    },
    gotoStep (n) {
      this.currentStep = n
      this.$emit('pager-change', this.currentStep)
    },
    resetDotsPagination () {
      this.isShowDotsToFirstPage = false
      this.isShowDotsToLastPage = false
    },
    showDotsToFirstPage () {
      this.isShowDotsToFirstPage = true
    },
    showDotsToLastPage () {
      this.isShowDotsToLastPage = true
    }
  },
  computed: {
    visibleStepRange () {
      this.resetDotsPagination()
      // Returns Array or Number of visible steps.
      const visibleCount = (this.stepsAround * 2) + 1
      if (this.totalSteps > visibleCount) {
        if (this.currentStep >= (this.stepsAround + 1)) {
          const start = (-visibleCount + 1) + Math.min((this.totalSteps - this.currentStep), this.stepsAround)
          let rtn = []
          let count = 0

          // Render the visible steps.
          while (count < visibleCount) {
            let nextStep = this.currentStep + (start + count++)
            if (nextStep > this.totalSteps) {
              break
            }
            rtn.push(nextStep)
          }

          if (rtn[0] > 1) {
            this.showDotsToFirstPage()
          }

          if (rtn[rtn.length - 1] < this.totalSteps) {
            this.showDotsToLastPage()
          }

          return rtn
        } else {
          this.showDotsToLastPage()
          return visibleCount
        }
      }
      return this.totalSteps
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/style.scss";

.app-pagination {
  &-list {
    display: flex;
    justify-content: center;
  }

  &-step-current {
    background-color: app-color('primary');
    border-radius: 100%;
    color: app-color('white');
    display: block;
    font-size: 16px;
    height: 28px;
    line-height: 28px;
    margin: 0 7px;
    text-align: center;
    width: 28px;
  }

  button {
    -webkit-appearance: none;
    background: none;
    border: 0;
    color: app-color('primary');
    cursor: pointer;
    display: block;
    font-size: 14px;
    font-weight: 500;
    height: 28px;
    line-height: 28px;
    margin: 0 7px;
    padding: 0 10px;
    transition: .2s all ease-in-out;

    &.app-pagination-next,
    &.app-pagination-prev {
      color: app-color('grey');
      position: relative;

      &:focus,
      &:hover {
        color: app-color('primary');
      }
    }

    &.app-pagination-next{
      padding-right: 18px;
    }
    &.app-pagination-prev {
      padding-left: 18px;
    }
  }

  .dots {
    line-height: 28px;
  }

  &-prev {
    color: app-color('grey');
    .icon-prev {
      font-size: 23px;
      left: 0;
      position: absolute;
      top: 2px;
    }
  }

  &-next {
    color: app-color('grey');
    .icon-next {
      font-size: 23px;
      right: 0;
      position: absolute;
      top: 2px;
    }
  }
}

@media (max-width: 768px) {
  .app-pagination {
    button {
      margin: 0 3px;
      padding: 0 7px;

      &.app-pagination-next,
      &.app-pagination-prev {
        span {
          display: none;
        }
      }

      &.app-pagination-next {
        padding-right: 10px;
      }
      &.app-pagination-prev {
        padding-left: 10px;
      }
    }
  }
}
</style>
