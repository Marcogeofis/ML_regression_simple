import './App.css';


function App() {
  return (
    <div className="App">
      <h2 className="main_ML--title">Machine learning Regression</h2>
      <main className="main_ML--regression">
        <section className="regression_introduction">
          <p className="text">
            El algoritmo de regresión lineal está clasificado dentro de los supervisados. Esto permite poder hacer predicciones o estimaciones de un valor continuo utilizando métodos estadísticos basados en datos existentes.
          </p>
          <section className="regression_introduction">
            <h4 className='subtitle'>Planteamiento del problema.</h4>
            <p className="text">
              ¿Cuanto CO2 emiten los autos en Canada?
            </p>
          </section>
          <section className="regression_introduction">
            <h4 className='subtitle'>Exploración de los datos.</h4>
            <p className="text">
              La exploración de los datos se realizó con las librerías pandas, numpy y matplotlib. Se inicializó con ver las carecteristicas de los datos, el cual contiene las siguientes columnas:
            </p>
            <ul className='lista_Atributos'>
              <li className='atributo'>MODELYEAR</li>
              <li className='atributo'>MAKE</li>
              <li className='atributo'>MODEL</li>
              <li className='atributo'>VEHICLE CLASS</li>
              <li className='atributo'>ENGINE SIZE</li>
              <li className='atributo'>CYLINDERS</li>
              <li className='atributo'>TRANSMISSION</li>
              <li className='atributo'>FUEL CONSUMPTION IN CITY(L/100 km)</li>
              <li className='atributo'>FUEL CONSUMPTION IN HWY(L/100 km)</li>
              <li className='atributo'>FUEL CONSUMPTION IN COMB(L/100 km)</li>
              <li className='atributo'>CO2 EMISSIONS(g/km)</li>
            </ul>
            <p className="text">
              Al realizar un análisis de los autos, se encuentra una relación entre el tamaño del motor y la capasidad de recorrido por galon por milla.
            </p>
            <figure className="body_figure">
              <img className="image_figure" src={'https://i.imgur.com/eHnjSSP.png'} alt='Gráfica tamaño de motor vs recorrido por galon de combustible'/>
            </figure>
            <p className="text">
              Por otra parte, Podemos comprender la relación entre los cilindros del motor y la capasidad de recorrido por galon por milla, lo cual, es muy similar su comportamiento con la gráfica anterior.
            </p>
            <figure className="body_figure">
              <img className="image_figure" src={'https://i.imgur.com/D6CLzJD.png'} alt='Gráfica cilindros vs recorrido por galon de combustible'/>
            </figure>
            <p className="text">Es decir, con forme es más grande el motor, mayor número de cílindros, se presenta menor capacidad de recorrido en millas por galon y mayor emisiones de CO2. Por eso la tendencia de las gráficas tienen un comportamiento similar.</p>
            <p className="text">
              Estas relaciones nos permite entender que las emciones de CO2 están directamente relacionadas con el tamaño de motor, el cilindraje y el consumo de combustible. Con esta información podemos entrenar nuestro modelo y utilizar el algoritmo de regresión lineal para hacer predicciones de las emiciones de CO2. 
            </p>
            <p className="text">
              Se tomara el 80% de los datos para entrenar el modelo y el 20% sera para probar la predicción. Dentro del procesos de entrenamiento del modelo se tomarán las columnas de "ENGINESIZE" y "CO2EMISSIONS".
            </p>
            <figure className="body_figure">
              <img className="image_figure" src={'https://i.imgur.com/lZZNciU.png'} alt='Gráfica tamaño de motor vs emisiones de CO2'/>
            </figure>
            <p className="text">
              Como la regresión lineal esta representada por una función y = a + bx.
            </p>
            <ul className='lista_Atributos'>
              <li className="atributo">Donde:</li>
              <li className="atributo">y es la variable dependiente.</li>
              <li className="atributo">x es la variable independiente.</li>
              <li className="atributo">a y b son los coeficientes o constantes.</li>
            </ul>
            <p className="text">
              Se toma los valores de la columna 'ENGINESIZE' para que estos valores sean la variable independiente "x", y al realizar la operación de la función nos arrojara el valor de la variable dependiente "y" columna 'CO2EMISSIONS'.
            </p>
            <p className="text">Para realizar el entrenamiento y el testeo. Usamos la librería de scikit-learn para aplicar la función que nos predicirá las emeciones de CO2.</p>
            <pre className='container_code'>
              <code className='code'>
                from sklearn import linear_model
              </code>
            </pre>
            <p className="text">Despues de entrenar, graficamos otraves nuestros datos y agregamos la recta pendiente para poder evaluar sus métricas correspondientes.</p>
            <figure className="body_figure">
              <img className="image_figure" src={'https://i.imgur.com/Ps8ArUT.png'} alt='Gráfica de la regresión aplicada'/>
            </figure>
            <p className="text">Por último, tenemos que evaluar los resultados con:</p>
            <ul className='lista_Atributos'>
              <li className="atributo">Error absoluto medio(MAE)</li>
              <li className="atributo">Error cuadrático medio(MSE)</li>
              <li className="atributo">R-squared</li>
            </ul>
            <figure className="body__small--figure">
              <img className="image__small--figure" src={'https://i.imgur.com/w9Aj6NZ.png'} alt='Gráfica de la regresión aplicada'/>
            </figure>
            <p className="text">Al observar las métricas buscamos minimizar el error (MAE, MSE) y maximizar R-squared ya que nos da la capacidad explicativa del modelo.</p>
            <p className="text">Como se ve el valor de R2-score es muy bueno, por qué esta cerca de 1 de lo contrario nuestro modelo no sería bueno.</p>
            
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
