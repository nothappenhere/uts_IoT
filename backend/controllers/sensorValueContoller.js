import db from '../database/connection.js'

//* @desc   Get maximum temperature
//* @route  GET /api/suhu/max
export const getMaxSuhu = (req, res, next) => {
  db.query('SELECT MAX(suhu) AS suhumax FROM uts_iot', (err, result) => {
    if (err) {
      return next(err) // Error handling
    }

    res.status(200).json(result)
  })
}

//* @desc   Get minimum temperature
//* @route  GET /api/suhu/min
export const getMinSuhu = (req, res, next) => {
  db.query('SELECT MIN(suhu) AS suhumin FROM uts_iot', (err, result) => {
    if (err) {
      return next(err) // Error handling
    }

    res.status(200).json(result)
  })
}

//* @desc   Get average temperature
//* @route  GET /api/suhu/avg
export const getAvgSuhu = (req, res, next) => {
  db.query('SELECT AVG(suhu) AS suhuavg FROM uts_iot', (err, result) => {
    if (err) {
      return next(err) // Error handling
    }

    res.status(200).json(result)
  })
}

//* @desc   Get maximum, minimum, average, all maximum temperature's value, and mont-year all maximum temperature's value
//* @route  GET /api/sensors/
export const getAllValue = (req, res, next) => {
  // Query pertama untuk mendapatkan suhu max, min, dan rata-rata
  db.query(
    'SELECT MAX(suhu) AS suhumax, MIN(suhu) AS suhumin, AVG(suhu) AS suhuRataRata, MAX(humid) AS humidmax FROM uts_iot',
    (err, result1) => {
      if (err) {
        return next(err) // Error handling
      }

      // Ambil nilai suhu maksimum dan kelembapan maksimum dari hasil query pertama
      const suhuMax = result1[0].suhumax
      const humidMax = result1[0].humidmax

      // Query kedua untuk mendapatkan semua baris yang memiliki suhu maksimum dan kelembapan maksimum
      db.query(
        'SELECT id AS idx, suhu, humid, kecerahan, timestamp FROM uts_iot WHERE suhu = ? AND humid = ?',
        [suhuMax, humidMax],
        (err, result2) => {
          if (err) {
            return next(err) // Error handling
          }

          // Query ketiga untuk mendapatkan daftar bulan-tahun dari data suhu maksimum
          db.query(
            "SELECT DISTINCT DATE_FORMAT(timestamp, '%m-%Y') AS month_year FROM uts_iot WHERE suhu = ? AND humid = ?",
            [suhuMax, humidMax],
            (err, result3) => {
              if (err) {
                return next(err) // Error handling
              }

              // Gabungkan hasil ketiga query
              const response = {
                suhumax: suhuMax,
                suhumin: result1[0].suhumin,
                suhuRataRata: result1[0].suhuRataRata,
                nilai_suhu_max_humid_max: result2,
                month_year_max: result3,
              }

              // Kirimkan response JSON
              res.status(200).json(response)
            },
          )
        },
      )
    },
  )
}
