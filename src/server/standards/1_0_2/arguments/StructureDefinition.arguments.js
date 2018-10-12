module.exports = {
	ABSTRACT: {
		name: 'abstract',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-abstract',
		documentation: 'Whether the structure is abstract.',
	},
	BASE: {
		name: 'base',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-base',
		documentation: 'Structure that this set of constraints applies to.',
	},
	BASE_PATH: {
		name: 'base-path',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-base-path',
		documentation: 'Path that identifies the base element.',
	},
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-code',
		documentation: 'A code for the profile.',
	},
	CONTEXT: {
		name: 'context',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-context',
		documentation: 'A use context assigned to the structure.',
	},
	CONTEXT_TYPE: {
		name: 'context-type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-context-type',
		documentation: 'resource | datatype | mapping | extension.',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-date',
		documentation: 'The profile publication date.',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-description',
		documentation: 'Text search in the description of the profile.',
	},
	DISPLAY: {
		name: 'display',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-display',
		documentation: 'Use this name when displaying the value.',
	},
	EXPERIMENTAL: {
		name: 'experimental',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-experimental',
		documentation: 'If for testing purposes, not real usage.',
	},
	EXT_CONTEXT: {
		name: 'ext-context',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-ext-context',
		documentation: 'Where the extension can be used in instances.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-identifier',
		documentation: 'The identifier of the profile.',
	},
	KIND: {
		name: 'kind',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-kind',
		documentation: 'datatype | resource | logical.',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-name',
		documentation: 'Name of the profile.',
	},
	PATH: {
		name: 'path',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-path',
		documentation: 'A path that is constrained in the profile.',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-publisher',
		documentation: 'Name of the publisher of the profile.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-status',
		documentation: 'The current status of the profile.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-type',
		documentation: 'Any datatype or resource, including abstract ones.',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-url',
		documentation: 'Absolute URL used to reference this StructureDefinition.',
	},
	VALUESET: {
		name: 'valueset',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-valueset',
		documentation: 'A vocabulary binding reference.',
	},
	VERSION: {
		name: 'version',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-version',
		documentation: 'The version identifier of the profile.',
	},
};