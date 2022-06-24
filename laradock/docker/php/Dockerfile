FROM php:8.1-fpm
COPY php.ini /usr/local/etc/php/

#Composer install
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Node.js install
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs \
    npm


RUN apt-get update \
  && apt-get -y install --no-install-recommends \
    locales \
    git \
    unzip \
    libzip-dev \
    libicu-dev \
    libonig-dev \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* \
  && locale-gen en_US.UTF-8 \
  && localedef -f UTF-8 -i en_US en_US.UTF-8 \
  && docker-php-ext-install \
    intl \
    pdo_mysql \
    zip \
    bcmath \
  && composer config -g process-timeout 3600 \
  && composer config -g repos.packagist composer https://packagist.org


WORKDIR /var/www/html

RUN composer global require "laravel/installer"