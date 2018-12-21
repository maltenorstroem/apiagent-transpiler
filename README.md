# apiagent-transpiler [WIP]

Transpiles Multi Interface Description Files (json) to api-agent custom element (v1)
Works with JSON or YMAL as input data format **only**

Based on simple-generator from https://github.com/veith/simple-generator
```
Big thanx to Veith
```
Built to customize the templateMap to your needs - In this case for a rest api communication web component


## Project structure
* [build] includes builded transpilers
* [configs] includes `your multi interface description files (mid.json)
* [deployments] home of the generated agent components
* [scripts] helper scripts
* [assets] agent and collection template

## Dokumentation 

This transpiler creates the client-side communication components based on a meta description of a service. The components can be adapted to the desired requirements using a template.

## Install

If you have Go installed:

```
go get github.com/maltenorstroem/apiagent-transpiler
```

## Usage

* Build templates for entity & collection
* Define your mulit interface description file
* generate components => `./scripts/generateAgents.sh`


```

 apiagent-transpiler -d data.json -t template.xxx // renders to stdout
 apiagent-transpiler -d data.json -t template.xxx > target.file
 
 apiagent-transpiler -h  // help 
 Usage of apiagent-transpiler:
   -d string
          Path to data file which contains YAML or JSON
   -t string
          Path to tpl file



```

