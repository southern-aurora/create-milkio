FROM kecream/bao:v1 as build

WORKDIR /root/workspace/
COPY . .
RUN echo "Building.." \
  && rm -rf ./node_modules \
  && bun i --production \
  && co generate \
  && co build

FROM debian:12.4-slim as product

EXPOSE 9000

WORKDIR /root/workspace/
COPY --from=0 /root/workspace/app /root/workspace/app
RUN chmod -R 700 /root/workspace/

ENTRYPOINT ["/root/workspace/app"]