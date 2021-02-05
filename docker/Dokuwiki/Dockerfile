FROM php:5.6-apache 
COPY ./dokuwiki /var/www/html
# RUN chmod -R 777 /var/www/html
RUN chmod -R 777 data/ ; chmod -R 777 lib/ ; chmod -R 777 conf/
RUN yum -y install tetex tetex-fonts tetex-dvips tetex-latex ghostscript ImageMagick
RUN fmtutil-sys --all
EXPOSE 80
