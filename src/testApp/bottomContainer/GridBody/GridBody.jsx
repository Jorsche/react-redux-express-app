import React from 'react'
import {Button, Grid, GridColumn, Image} from 'semantic-ui-react'
import './GridBody.css'
const GridBody = () => {
    return (
        <div className={"gridBody"}>
            <Grid padded centered>
                <Grid.Row className="GridRow">
                      <GridColumn className="gridColumnOne" floated={"left"} width={8}>
                    <div className="bottomTopText">
                       <h1 className="aaaa">We Help Companies and Companions</h1>
                        <h3 className="bbbb">
                            We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs... through pure data analytics.
                        </h3>
                    </div>
                      <div className="bottomBtmText">
                          <h1 className="aaaa">We Make Bananas That Can Dance</h1>
                          <h3 className="bbbb">Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
                          </h3>
                      </div>
                      </GridColumn>
                      <GridColumn className="gridColumnTwo" floated={"right"} width={6} stretched>
                          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                      </GridColumn>

                </Grid.Row>

                <Grid.Row>
                    <div>
                        <Button>Check them out</Button>
                    </div>
                </Grid.Row>
            </Grid>
        </div>

    );
};

export default GridBody;