import { shallowMount, createLocalVue } from '@vue/test-utils';
import ResizeComponent from './resize.component';
import { resizeObserverDirective } from '../../src/resize-observer-directive';
import { toHaveStyle, toHaveAttribute, toContainElement } from '@testing-library/jest-dom';

expect.extend({ toHaveStyle, toHaveAttribute, toContainElement });

describe('object的插入及其样式、属性', () => {
  const localVue = createLocalVue();

  localVue.directive('resize', resizeObserverDirective);

  const wrapper = shallowMount(ResizeComponent, {
    localVue
  });

  const resizeWrapper = wrapper.find('#resize');
  const objectWrapper = wrapper.find('#resize object');

  it('object是否正常插入', () => {
    expect(resizeWrapper.element).toContainElement(objectWrapper.element);
  })

  it('object的属性是否正常', () => {
    expect(objectWrapper.element).toHaveAttribute('aria-hidden');
    expect(objectWrapper.element).toHaveAttribute('tabindex');
    expect(objectWrapper.element).toHaveAttribute('style');
  })
  
  it('object的样式是否正常', () => {
    expect(objectWrapper.element).toHaveStyle('display: block;');
    expect(objectWrapper.element).toHaveStyle('position: absolute;');
    expect(objectWrapper.element).toHaveStyle('top: 0;');
    expect(objectWrapper.element).toHaveStyle('left: 0;');
    expect(objectWrapper.element).toHaveStyle('width: 100%;');
    expect(objectWrapper.element).toHaveStyle('height: 100%;');
    expect(objectWrapper.element).toHaveStyle('overflow: hidden;');
    expect(objectWrapper.element).toHaveStyle('pointer-events: none;');
    expect(objectWrapper.element).toHaveStyle('z-index: -1;');
    expect(objectWrapper.element).toHaveStyle('opacity: 0;');
  })
})
