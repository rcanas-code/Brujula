extends Node

const GAME_DATA_PATH: String = "res://content/gamedata.json"

var game_data: Dictionary = {}


func _ready() -> void:
	load_game_data()


func load_game_data() -> bool:
	game_data = {}

	if not FileAccess.file_exists(GAME_DATA_PATH):
		push_error("DataManager: no existe el archivo %s." % GAME_DATA_PATH)
		return false

	var file: FileAccess = FileAccess.open(GAME_DATA_PATH, FileAccess.READ)
	if file == null:
		push_error(
			"DataManager: no se pudo abrir %s. Código de error: %s."
			% [GAME_DATA_PATH, FileAccess.get_open_error()]
		)
		return false

	var json_text: String = file.get_as_text()
	var json: JSON = JSON.new()
	var parse_error: Error = json.parse(json_text)

	if parse_error != OK:
		push_error(
			"DataManager: JSON no válido en la línea %d: %s."
			% [json.get_error_line(), json.get_error_message()]
		)
		return false

	var parsed_data: Variant = json.data
	if not parsed_data is Dictionary:
		push_error("DataManager: la raíz de gamedata.json debe ser un objeto JSON.")
		return false

	game_data = parsed_data as Dictionary
	return true


func get_zone_data(category: String) -> Variant:
	if not game_data.has(category):
		push_warning("DataManager: no existe la categoría '%s'." % category)
		return null

	return game_data[category]
