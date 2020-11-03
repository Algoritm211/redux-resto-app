import React from 'react';
import RestoServiceContext from '../resto-service-context';

const WithRestoService = () => (View) => {
    return (props) => {
      return (
        <RestoServiceContext.Consumer>
          {
            (RestoService) => {
              return (
                <View {...props} RestoService={RestoService}/>
              )
            }
          }
        </RestoServiceContext.Consumer>
      )
    }
};

export default WithRestoService;