> Kafka

- Plataforma
- Trabalha de forma distribuída
- Banco de dados
- Extremamente rápido e com baixa latência
- Utiliza o disco ao invés de memória para processar os dados
- Não é apenas um sistema tradicional de filas como RabbitMq

> Tópico

- Stream de dados que atua como um banco de dados
- Todos os dados ficam armazenados, ou seja, cada Topic tem seu local para armazenar seus dados
- Tópico possui diversar partições

> Kafka Cluster

- Conjunto de Brokers
- Cada Broker é um server
- Cada Broker é responsável por armazenar os dados de uma partição
- Cada partição de Topic está distribuído em diferentes brokers

> Ecossistema

- Kafka Connect: connectors
- Confluent Schema Registry
- Rest Proxy
- KsqlDB
- streams


- sudo docker-compose up -d -> http://localhost:9021
- go run cmd/trade/main.go

{
  "order_id": "1",
  "investor_id": "Mari",
  "asset_id": "asset1",
  "current_shares": 10,
  "shares": 5,
  "price": 5.0,
  "order_type": "SELL"
}

{
  "investor_id": "Celia",
  "asset_id": "asset1",
  "current_shares": 0,
  "shares": 5,
  "price": 5.0,
  "order_type": "BUY"
}

- 20:34 minutos
