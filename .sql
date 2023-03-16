SELECT
cars.data, brands.marca, cars.nome, cars.vendas, cars.valor_do_veiculo as
valor
FROM cars
INNER JOIN
brands
ON
cars.id_marca_ = brands.id_marca