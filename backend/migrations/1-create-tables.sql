create table if not exists ledger (
  trx_id varchar(255),
  trx_type varchar(255),
  trx_subtype varchar(255),
  time timestamp,
  asset varchar(255),
  asset_type varchar(255),
  amount decimal(18,10),
  balance decimal(18,10),
  fee decimal(18, 10),
  source varchar(255),
  eur_price decimal(18, 10)
);
