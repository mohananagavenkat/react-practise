import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (component, attr) => {
  return component.find(`[data-test='${attr}']`);
}

export const checkProps = (component, props) => {
  return checkPropTypes(component.propTypes, props, 'prop', component.name);
}