<template>
  <div>

    <div class="toggle-wrapper">
      <div
        v-for="button of modelist"
        :key="button.value"
      >
        <input
          class="checkbox"
          type="radio"
          v-model="mode"
          :id="button.value"
          :value="button.value"
          @change="modeChange">
        <label
          class="for-checkbox"
          :for="button.value"
        >
          <component :is="button.icon"></component>
            <div>{{ button.label }}</div>
        </label>
      </div>
    </div>

    <div v-if="mode !== 'vs'" class="components-toggler-wrapper">
      <div class="label">
        <span>Обычные компоненты</span>
      </div>
      <div>
        <input
          class="component-toggler"
          type="checkbox"
          id="component-toggler"
          v-model="functionalComponents"
          @change="funcChange"
        >
        <label
          class="for-component-toggler"
          for="component-toggler"
        >
        </label>
      </div>
      <div class="label">
        <span>Функциональные компоненты</span>
      </div>
    </div>

  </div>
</template>

<script>
import PageLast from 'vue-material-design-icons/PageLast.vue';
import ScriptTextOutline from 'vue-material-design-icons/ScriptTextOutline.vue';
import ArrowDownBoldBoxOutline from 'vue-material-design-icons/ArrowDownBoldBoxOutline.vue';
import TableLarge from 'vue-material-design-icons/TableLarge.vue';

export default {
  name: "ModeToggler",
  components: {
    PageLast,
    ScriptTextOutline,
    ArrowDownBoldBoxOutline,
    TableLarge
  },
  data() {
    return {
      mode: 'base',
      functionalComponents: false,
      modelist: [
        {
          label: 'Фильтрация/Сортировка',
          value: 'base',
          icon: 'TableLarge'
        },
        {
          label: 'Статическая пагинация',
          value: 'pag',
          icon: 'PageLast'
        },
        {
          label: 'Бесконечный скролл',
          value: 'is',
          icon: 'ScriptTextOutline'
        },
        {
          label: 'Виртуальный скролл',
          value: 'vs',
          icon: 'ArrowDownBoldBoxOutline'
        },
      ]
    }
  },
  methods: {
    modeChange() {
      this.$emit('mode-change', this.mode);
    },
    funcChange() {
      this.$emit('func-change', this.functionalComponents);
    }
  }
}
</script>

<style scoped>
.toggle-wrapper, .components-toggler-wrapper {
  display: flex;
  justify-content: space-evenly;
}

.components-toggler-wrapper .label {
  line-height: 100px;
  font-size: 11px;
  text-transform: uppercase;
}

[type="checkbox"]:checked,
[type="checkbox"]:not(:checked),
[type="radio"]:checked,
[type="radio"]:not(:checked){
	position: absolute;
	left: -9999px;
	width: 0;
	height: 0;
	visibility: hidden;
}

.component-toggler:checked + label,
.component-toggler:not(:checked) + label{
	position: relative;
	width: 70px;
	display: inline-block;
	padding: 0;
	margin: 0 auto;
	text-align: center;
	margin: 17px 0;
	margin-top: 50px;
	height: 6px;
	border-radius: 4px;
	background-image: linear-gradient(298deg, #da2c4d, #f8ab37);
	z-index: 100 !important;
}

.component-toggler:checked + label:before,
.component-toggler:not(:checked) + label:before {
	position: absolute;
	font-family: 'unicons';
	cursor: pointer;
	top: -17px;
	z-index: 2;
	font-size: 20px;
	line-height: 40px;
	text-align: center;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	-webkit-transition: all 300ms linear;
	transition: all 300ms linear; 
}

.component-toggler:not(:checked) + label:before {
	content: '\0043';
	left: 0;
	color: #ecedf3;
	background-color: #353746;
	box-shadow: 0 4px 4px rgba(0,0,0,0.15), 0 0 0 1px rgba(26,53,71,0.07);
}

.component-toggler:checked + label:before {
	content: '\0046';
	left: 30px;
	color: #f8ab37;
	background-color: #1f2029;
	box-shadow: 0 4px 4px rgba(26,53,71,0.25), 0 0 0 1px rgba(26,53,71,0.07);
}

.checkbox:checked + label,
.checkbox:not(:checked) + label{
	position: relative;
	display: inline-block;
	padding: 20px;
	width: 110px;
	font-size: 14px;
	line-height: 20px;
	letter-spacing: 1px;
	margin: 0 auto;
	margin-left: 5px;
	margin-right: 5px;
	margin-bottom: 10px;
	text-align: center;
	border-radius: 4px;
	overflow: hidden;
	cursor: pointer;
	text-transform: uppercase;
  font-size: 10px;
	-webkit-transition: all 300ms linear;
	transition: all 300ms linear; 
}

.checkbox:not(:checked) + label{
	background-color: #f0eff3;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}

.checkbox:checked + label{
  color: #ffffff;
	background-color: transparent;
	box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.checkbox:not(:checked) + label:hover{
	box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.checkbox:checked + label::before{
	position: absolute;
	content: '';
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 4px;
	background-image: linear-gradient(298deg, #da2c4d, #f8ab37);
	z-index: -1;
}

.checkbox:checked + label .uil,
.checkbox:not(:checked) + label .uil{
	font-size: 24px;
	line-height: 24px;
	display: block;
	padding-bottom: 10px;
}

.checkbox:checked ~ .checkbox:not(:checked) + label{
	background-color: #f0eff3;
	color: #1f2029;
	box-shadow: 0 1x 4px 0 rgba(0, 0, 0, 0.05);
}
</style>