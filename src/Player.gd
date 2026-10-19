extends CharacterBody2D

var health: int = 0
var move_speed: float = 0.0


func _ready() -> void:
	var player_data: Variant = DataManager.get_zone_data("player_base")
	var config_data: Variant = DataManager.get_zone_data("config")

	if not player_data is Dictionary:
		_disable_player("la sección 'player_base' no es válida")
		return

	if not config_data is Dictionary:
		_disable_player("la sección 'config' no es válida")
		return

	var player_dictionary: Dictionary = player_data as Dictionary
	var config_dictionary: Dictionary = config_data as Dictionary

	if not player_dictionary.has("starting_health"):
		_disable_player("falta 'player_base.starting_health' en gamedata.json")
		return

	if not config_dictionary.has("player_speed"):
		_disable_player("falta 'config.player_speed' en gamedata.json")
		return

	health = int(player_dictionary["starting_health"])
	move_speed = float(config_dictionary["player_speed"])

	print(
		"Player: estadísticas cargadas desde gamedata.json — vida: %d, velocidad: %.1f"
		% [health, move_speed]
	)


func _physics_process(_delta: float) -> void:
	var input_direction: Vector2 = Input.get_vector(
		"ui_left",
		"ui_right",
		"ui_up",
		"ui_down"
	)

	velocity = input_direction * move_speed
	move_and_slide()


func _disable_player(reason: String) -> void:
	push_error("Player: %s." % reason)
	velocity = Vector2.ZERO
	set_physics_process(false)
