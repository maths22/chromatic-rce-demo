import React from 'react';

import { storiesOf } from '@storybook/react';

import CanvasRce from 'canvas-rce/lib/modules/rce/CanvasRce';

const rceProps = {
  editorOptions: () => {
    return {};
  },
  defaultContent: "Test RCE content",
  textareaId: "textarea"
}

storiesOf('Demo', module).add('Canvas RCE', () => <CanvasRce
  rceProps={rceProps}
/>);
