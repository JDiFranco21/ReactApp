import React from 'react'
import {Grid} from 'semantic-ui-react'

// const myStyle = {
//     backgroundColor: "purple"
// }

const Header  = ()=>{
    return(

    <div>

        <div className='header-style'>


    <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
          Clicky Game
      </Grid.Column>
      <Grid.Column>
          YOU
      </Grid.Column>
      <Grid.Column>
          Score: 0 | Top Score: 0
      </Grid.Column>
    </Grid.Row>
    </Grid>

        </div>

    </div>
    )
}

export default Header