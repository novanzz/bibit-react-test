import Error from '../pages/_error';

const BaseLayout = (props) => {
   const { children, error } = props;
   return (
      <div>
         <main>
            <div className="container">
               {error 
                  ?
                  <Error error={error}/>
                  :
                  children
               }
            </div>
         </main>
      </div>
   )
}

export default BaseLayout;
