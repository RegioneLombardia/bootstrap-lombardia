/**
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * Licensed under BSD-3-Clause license (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * This a fork of Bootstrap: Initial license and original file name below
 * Bootstrap (v5.2.3): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import Tooltip from './tooltip'

/**
 * Constants
 */

const NAME = 'popover'

const SELECTOR_TITLE = '.popover-header'
const SELECTOR_CONTENT = '.popover-body'

const Default = {
  ...Tooltip.Default,
  content: '',
  offset: [0, 8],
  placement: 'right',
  template:
    '<div class="popover" role="tooltip">' +
    '<div class="popover-arrow"></div>' +
    '<h3 class="popover-header"></h3>' +
    '<div class="popover-body"></div>' +
    '</div>',
  trigger: 'click',
}

const DefaultType = {
  ...Tooltip.DefaultType,
  content: '(null|string|element|function)',
}

/**
 * Class definition
 */

class Popover extends Tooltip {
  // Getters
  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
  }

  static get NAME() {
    return NAME
  }

  // Overrides
  _isWithContent() {
    return this._getTitle() || this._getContent()
  }

  // Private
  _getContentForTemplate() {
    return {
      [SELECTOR_TITLE]: this._getTitle(),
      [SELECTOR_CONTENT]: this._getContent(),
    }
  }

  _getContent() {
    return this._resolvePossibleFunction(this._config.content)
  }
}

export default Popover
