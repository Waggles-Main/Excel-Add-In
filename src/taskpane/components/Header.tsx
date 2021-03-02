import * as React from "react";
import { AnimationClassNames, mergeStyles, getTheme } from 'office-ui-fabric-react/lib/Styling';
import { Layer } from 'office-ui-fabric-react/lib/Layer';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
import { Text } from 'office-ui-fabric-react/lib/Text';


export default class Header extends React.Component {
  render() {
    const iconClass = mergeStyles({
      height: 20,
      width: 20,
      margin: '5px 5px',
      color: 'white',
    });
    return (
      <section>
        <Layer>
          <div className={contentClass}>
            <Text variant="large"><FontIcon iconName="GlobalNavButton" className={iconClass} /> Easy Tables</Text>
            </div>
        </Layer>
      </section>
    );
  }
}

const theme = getTheme();
const contentClass = mergeStyles([
  {
    backgroundColor: theme.palette.themePrimary,
    color: theme.palette.white,
    lineHeight: '50px',
    padding: '0 20px',
  },
  AnimationClassNames.scaleUpIn100,
]);
