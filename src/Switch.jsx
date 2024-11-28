import { useRef } from 'react';

/**
 * Switch component
 *
 * @param {object} props - The properties of the checkbox component.
 * @param {string} [props.idSuffix] - Custom id suffix instead of generating one with understreck.
 * @param {function} props.onChange - The onChange function of the component.
 * @param {boolean} [props.disabled] - Determines if the component should be disabled.
 * @param {object} [props.style] - The style to apply to the input element.
 * @param {string} [props.className] - The classes to add to the component.
 * @param {string} [props.dataTestId] - The dashed data-test-id for the component.
 * @param {string} [props.info] - Add a small info subtext to the component.
 * @param {string} [props.label] - The label of the component.
 * @param {string} [props.ariaLabel] - The components aria-label
 * @param {boolean} props.checked - Determines checked state of the component
 * @param {boolean} [props.clickableLabel=true] - Determines checked state of the component
 * @returns {React.ReactElement}
 *
 * @example <Switch required={true} label="Switch" onChange={setValue} checked={value} />
 */
export function Switch({
  checked,
  onChange,
  className,
  dataTestId,
  disabled,
  idSuffix,
  info,
  label,
  style,
  ariaLabel,
  clickableLabel = true,
  ariaDescribedby,
  isComponentValid,
  shouldShowErrors,
  invalidText
}) {
  const wrapperDivId = useRef(idSuffix ? idSuffix : 'uniqId').current;

  const labelElementId = 'label_' + wrapperDivId;
  const inputElementId = 'input_' + wrapperDivId;
  const invalidElementId = 'feedback_' + wrapperDivId;
  const infoElementId = 'info_' + wrapperDivId;

  return (
    <div
      id={wrapperDivId}
      style={style}
      className={`custom-control custom-switch w-100 ${shouldShowErrors ? 'has-danger' : ''} ${
        isComponentValid ? 'has-valid' : ''
      } ${className}`}
      data-test-id={dataTestId}
    >
      <input
        onChange={(e) => onChange(e.target.checked)}
        value={label}
        checked={checked}
        id={inputElementId}
        type="checkbox"
        className="custom-control-input"
        disabled={disabled}
        aria-label={ariaLabel}
        aria-invalid={shouldShowErrors}
        aria-labelledby={`${inputElementId} ${shouldShowErrors ? invalidElementId : ''} ${
          infoElementId ? infoElementId : ''
        }`}
        aria-describedby={`${ariaDescribedby ? ariaDescribedby : ''}`}
      />
      <label
        className="custom-switch-label"
        id={labelElementId}
        htmlFor={inputElementId}
        style={!clickableLabel ? { textDecoration: 'none' } : {}}
      >
        <span
          onClick={(e) => {
            e.stopPropagation();
          }}
          style={!clickableLabel ? { cursor: 'default' } : {}}
        >
          {label}
        </span>
      </label>
      {shouldShowErrors && (
        <div id={invalidElementId} className="has-danger form-control-feedback" data-test-id="invalid_feedback">
          <span className="sr-only">{invalidText}</span>
          {invalidText}
        </div>
      )}
      {info && (
        <small id={infoElementId} className="form-text text-muted d-block">
          {info}
        </small>
      )}
    </div>
  );
}
