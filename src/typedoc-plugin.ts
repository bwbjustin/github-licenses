const { Converter } = require("typedoc");

exports.load = ({ application }) => {
	application.converter.on(Converter.EVENT_CREATE_DECLARATION, (_context, reflection, node) => {
		if (!node || !node.name || reflection.name != "export=") return;

		reflection.name = node.name.getText();
	});
}