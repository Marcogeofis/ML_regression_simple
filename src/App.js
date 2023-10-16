import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <h2>Machine learning Regression</h2>
        <section>
          <p>
            El algoritmo de regression de machine learning se encuentra de la clasificación de supervisados. Este algoritmo me permete poder hacer predicciones o estimaciones de un valor continuo utilizando métodos estadisticos basados en datos existentes.
          </p>
          <p>
            En este proyecto se realizará un análsis de la sieguiente base de datos.
          </p>
          <section>
            <h4>Planteamiento del problema.</h4>
            <p>
              ¿Cuanto CO2 emiten los autos en canada?
            </p>
          </section>
          <section>
            <h4>Exploración de los datos.</h4>
            <p>
              Haciendo una explorarción de los datos usando las librerias de pandas, numpy y matplotlib. Podemos ver las características de los datos.
            </p>
            <ul>
              <li>MODELYEAR</li>
              <li>MAKE</li>
              <li>MODEL</li>
              <li>VEHICLE CLASS</li>
              <li>ENGINE SIZE</li>
              <li>CYLINDERS</li>
              <li>TRANSMISSION</li>
              <li>FUEL CONSUMPTION IN CITY(L/100 km)</li>
              <li>FUEL CONSUMPTION IN HWY(L/100 km)</li>
              <li>FUEL CONSUMPTION IN COMB(L/100 km)</li>
              <li>CO2 EMISSIONS(g/km)</li>
            </ul>
            <p>
              Haciendo un análisis de los autos, se encuentra una relación entre el tamaño del motor y la capasidad de recorrido por galon por milla.
            </p>
            <figure>
              <img alt='Gráfica tamaño de motor vs recorrido por galon de combustible'/>
            </figure>
            <p>
              Por otra parte, la relación entre los cilindros del motor y la capasidad de recorrido por galon por milla es muy similar.
            </p>
            <figure>
              <img alt='Gráfica cilindros vs recorrido por galon de combustible'/>
            </figure>
            <p>Es decir, con forme es más grande el motor y mayor número de cílindros menor capacidad de recorrido en millas por galon. Por eso la tendencia de las gráficas tienen un comportamiento similar.</p>
            <p>
              Esta relación como se muestra, nos permite utilizar el algoritmo de regresión. El algoritmo de regresión como se menciono puede predecir las emisiones de CO2 usando el tamaño de motor ya que esta directamente relacionado. 
            </p>
            <figure>
              <img alt='Gráfica tamaño de motor vs emisiones de CO2'/>
            </figure>
            <p>
              Como la regresión lineal esta representada por una función y = a + bx.
            </p>
            <p>Donde:</p>
            <p>y es la variable dependiente.</p>
            <p>x es la variable independiente.</p>
            <p>a y b son los coeficientes o constantes.</p>
            <p>
              Se toma los valores de la columna 'ENGINESIZE' para que estos valores sean la variable independiente "x", y alrealizar la operación de la función nos arrojara el valor de la variable dependiente "y".
            </p>
            <p>Pero antes de realizar esta operación, tenemos que entrenar nuestro modelo y probarlo. Usamos la librería de scikit-learn para aplicar la función que nos predicirá las emeciones de CO2.</p>
            <pre>
              <code>
                from sklearn import linear_model
              </code>
            </pre>
            <figure>
              <img alt='Gráfica de la regresión aplicada'/>
            </figure>
            <p>Por último, tenemos que evaluar los resultados con:</p>
            <p>Error absoluto medio(MAE)</p>
            <p>Error cuadrático medio(MSE)</p>
            <p>R-squared</p>

            <p>grafica</p>
            <p>Como se ve el valor de R2-score es muy bueno por que esta cerca de 1, de lo contrario estubiera más cercano 0 nuestro modelo fue malo.</p>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
